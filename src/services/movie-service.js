import movie from "../movie.js";
import {v4 as uuid} from 'uuid'

const movieService = {
    getAll(filter = {}){
        let result = movie

        if(filter.search){
            result = result.filter(movie => movie.title.toLowerCase().includes(filter.search.toLowerCase()))
        }
        return result
    },
    findOneMovie(movieId){
        const result = movie.find(movie => movie.id === movieId)
    
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