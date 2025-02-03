import movie from "../movie.js";
// import {v4 as uuid} from 'uuid'
import Movie from "../models/Movie.js";

const movieService = {
     getAll(filter = {}){
        let result =  Movie.find({})

        // if(filter.search){
        //     result = result.filter(movie => movie.title.toLowerCase().includes(filter.search.toLowerCase()))
        // }
        // if(filter.genre){
        //     result = result.filter(movie => movie.genre.toLocaleLowerCase() === filter.genre)
        // }
        // if(filter.year){
        //     result = result.filter(movie => movie.year === filter.year) 
        // }
         return result
    },
    getOneMovie(movieId){
        const result = Movie.findById(movieId)
    
        return result
    },
    create(movieData){
        //добавяме в movie.js новосъздадения филм
        const newId = uuid()


        movie.push({
            id:newId,
            ...movieData,
            rating:Number(movieData.rating)
        })
        return newId
    }
}

export default movieService