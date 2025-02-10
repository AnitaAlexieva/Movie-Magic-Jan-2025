import {Router} from 'express'
import movieService from '../services/movie-service.js'

const router = Router()

router.get('/', async (req, res) => {
    //second solution use .lean on query to get plain object
    const movies = await movieService.getAll()

    //first solution - convert documents to objects
    //Convert documents to plain objects
    //const plainMovies = movies.map(m=>m.toObject())

    //Third solutoin is to use allowProtoPropertiesByDefault runtimeOption in handlebars
    res.render('home', {movies})
})

router.get('/about', (req, res) => {
res.render('about', {pageTitle : 'About'}); // Това ще зареди home.hbs без layout
});

export default router