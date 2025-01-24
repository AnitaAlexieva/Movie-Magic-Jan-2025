import { Router } from "express";
import movieService from "../services/movie-service.js";

const movieController = Router()


//на /create искаме да се изпълни този action
movieController.get('/create', (req, res)=>{
    res.render('create')
})

movieController.post('/create', (req,res) =>{
    console.log('POST MOVIE')

    const newMovie = req.body
    res.end()
})

movieController.get('/:movieId/details', (req, res) => {
    const movieId = req.params.movieId;

    const movie = movieService.findOneMovie(movieId )
    
    res.render('details', {movie})
})

export default movieController