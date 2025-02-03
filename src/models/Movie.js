import { Schema, model } from "mongoose";

//create Shema
const movieSchema  = new Schema({
    title:String,
    category: String,
    genre:String,
    director: String,
    year: Number,
    imageUrl:String,
    rating:Number,
    description:String
})

//create model
const Movie = model('Movie', movieSchema)

//expprt model
export default Movie