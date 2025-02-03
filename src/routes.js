import {Router} from 'express'
import homecontroller from './controllers/home-controller.js'
import movieController from './controllers/movie-controller.js'
import castController from './controllers/cast-controller.js'
const routes = Router()

routes.use(homecontroller)
routes.use('/movies',movieController)
routes.use('/casts', castController )

routes.get('*', (req, res) => {
    res.render('404')
})

export default routes