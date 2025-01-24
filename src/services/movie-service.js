import movie from "../movie.js";


const movieService = {

     findOneMovie(movieId){
        const result = movie.find(movie => movie.id === movieId)
    
        return result
    }
}

export default movieService