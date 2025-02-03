import Movie from "../models/Movie.js";

const movieService = {
     getAll(filter = {}){
        let query =  Movie.find({})

        if(filter.search){
            query = query.where({title: filter.search})
        }
        if(filter.genre){
            query = query.where({genre: filter.genre})
        }
        if(filter.year){
            query = query.where({year:Number(filter.year)}) 
        }
         return Movie.find({})
    },
    getOneMovie(movieId){
        const result = Movie.findById(movieId)
    
        return result
    },
    create(movieData){
        //добавяме в movie.js новосъздадения филм
        const result = Movie.create({
            ...movieData,
            rating:Number(movieData.rating),
            year:Number(movieData.year)

        })
        return result;

      
    }
}

export default movieService