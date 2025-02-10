import { Router } from "express";
import movieService from "../services/movie-service.js";
import castService from "../services/cast-service.js";

const movieController = Router()

movieController.get('/search', async (req,res) => {
    const filter = req.query

    const movies = await movieService.getAll(filter)
    res.render('search', {movies, filter})
})

//на /create искаме да се изпълни този action
movieController.get('/create', (req, res)=>{
    res.render('create')
})

movieController.post('/create', async(req,res) =>{
    const newMovie = req.body
    const userId = req.user?.id

   await movieService.create(newMovie, userId)

    res.redirect('/')
})

movieController.get('/:movieId/details', async (req, res) => {
    ; // Проверка дали user е дефиниран
    
    if (!req.user) {
        return res.redirect('/auth/login'); // Ако няма логнат потребител
    }

    const movieId = req.params.movieId;
    const movie = await movieService.getOneWithCasts(movieId);

    
    res.render('movie/details', {
        movie,
        isCreator: Boolean(movie.creator?.toString() === req.user.id.toString()), // Проверка дали е създател
    });
    
});


movieController.get('/:movieId/attach-cast',async (req, res) =>{
    const movieId = req.params.movieId
    const movie = await movieService.getOneMovie(movieId)
    const casts = await castService.getALL({exclude:movie.casts})

    res.render('movie/attach-cast', {movie, casts})
})

movieController.post('/:movieId/attach-cast', async (req,res) =>{
    const castId = req.body.cast
    const movieId = req.params.movieId
    await movieService.attachCast(movieId, castId)

    res.redirect(`/movies/${movieId}/details`)
})

movieController.get('/:movieId/delete',async (req, res) =>{
    const movieId = req.params.movieId;

    const movie =await movieService.getOneMovie(movieId);
    if(!movie.creator?.equals(req.user?.id)){
        return res.redirect('/404')
    }
    await movieService.delete(movieId)
    res.redirect('/')
})

function getCategoriesViewData(category){
    const categoriesMap = {
        'tv-show':'TV Show',
        'animation':'Animation',
        'movie':'Movie',
        'documentary':'Documentary',
        'short-film':'Short Film'
    }

    const categories = Object.keys(categoriesMap).map(value =>({
        value,
        label:categoriesMap[value],
        selected:value === category ? 'selected':'',
    }))
    console.log("Current category:", category);
    return categories
}

movieController.get('/:movieId/edit',async (req,res) =>{
    const movieId = req.params.movieId
    const movie = await movieService.getOneMovie(movieId)

    const categories = getCategoriesViewData(movie.category)

    console.log(categories)
    res.render('movie/edit', {movie, categories})
})

export default movieController