import {Router} from 'express'
import movies from '../movie.js'
const router = Router()


router.get('/', (req, res) => {
    res.render('home', {movies})
})

router.get('/about', (req, res) => {
res.render('about'); // Това ще зареди home.hbs без layout
});

export default router