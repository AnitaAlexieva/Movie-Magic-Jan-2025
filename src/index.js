import express from 'express';
import handlebars from 'express-handlebars';
import routes from './routes.js'
import showRatingHelper from './helpers/rating-helper.js';
import mongoose from 'mongoose';

const app = express();

//db configuration

try{
    const uri = 'mongodb://localhost:27017/magic-movies-jan2025'
    await mongoose.console(uri)

    console.log('Connected to the DB successfully')
}catch(err){
    console.error(error.message)
}

//handklebars configuration
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    helpers:{
        showRating: showRatingHelper
    }
}));

app.set('view engine', 'hbs');
app.set('views', './src/views');

//express configuration
//express static да отговаря на route, който да започва със статик 
//ако нещо отговаря на static да го търси в src/public
app.use('/static', express.static('src/public'))

//Learn express to parse from data
app.use(express.urlencoded({extended:false}))

//setup routes
app.use(routes)
  
//start server
app.listen(5001, () => console.log('Server is listening on http://localhost:5001...'));
