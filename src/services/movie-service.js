import movie from "../movie.js";
import {v4 as uuid} from 'uuid'

const movieService = {
    findOneMovie(movieId){
        const result = movie.find(movie => movie.id === movieId)
    
        return result
    },
    create(movieData){
        //добавяме в movie.js новосъздадения филм
        const newId = uuid()


        movie.push({
            id:newId,
            ...movieData
        })
        return newId
    }
}

export default movieService