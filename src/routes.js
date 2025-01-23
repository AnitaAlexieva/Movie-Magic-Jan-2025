import {Router} from 'express'
import homecontroller from './controllers/home-controller.js'

const routes = Router()

routes.use(homecontroller)

routes.get('*', (req, res) => {
    res.render('404')
})

export default routes