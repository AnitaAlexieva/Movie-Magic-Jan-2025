import express from 'express';
import handlebars from 'express-handlebars';
import homecontroller from './controllers/home-controller.js'

const app = express();

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));

app.set('view engine', 'hbs');
app.set('views', './src/views');

//express static да отговаря на route, който да започва със статик 
//ако нещо отговаря на static да го търси в src/public
app.use('/static', express.static('src/public'))

app.use(homecontroller)


app.get('*', (req, res) => {
    res.render('404')
})

app.listen(5001, () => console.log('Server is listening on http://localhost:5001...'));
