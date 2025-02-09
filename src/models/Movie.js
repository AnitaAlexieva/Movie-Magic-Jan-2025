import { Schema, model , Types} from "mongoose";

//create Shema
const movieSchema  = new Schema({
    title:String,
    category: String,
    genre:String,
    director: String,
    year: Number,
    imageUrl:String,
    rating:Number,
    description:String,
    //всеки филм ще има колекция(масив) от id, 
    // като всяко id ще представлява връзка(референция) към  оопределение участици
    casts: [{
        type: Types.ObjectId,
        ref:'Cast'
    }],
    creator:{
        type:Types.ObjectId,
        ref:'User',
    }
})

//create model
const Movie = model('Movie', movieSchema)

//expprt model
export default Movie