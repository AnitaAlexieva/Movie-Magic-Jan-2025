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
    getOneWithCasts(movieId){
        return this.getOneMovie(movieId).populate('casts')
    },
    create(movieData){
        //добавяме в movie.js новосъздадения филм
        const result = Movie.create({
            ...movieData,
            rating:Number(movieData.rating),
            year:Number(movieData.year)

        })
        return result;
    },
    async attachCast(movieId, castId){
        //Attach #1
        // const movie = await Movie.findById(movieId)
        // if(movie.casts.includes(castId)){
        //     return
        // }
        // movie.casts.push(castId)
        // await movie.save()

        // return movie

        //Attach #2
        return Movie.findByIdAndUpdate(movieId, {$push:{casts:castId}})

    }
}

export default movieService