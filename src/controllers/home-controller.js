import {Router} from 'express'

const router = Router()


router.get('/', (req, res) => {
    res.render('home')
})

router.get('/about', (req, res) => {
res.render('about'); // Това ще зареди home.hbs без layout
});

export default router