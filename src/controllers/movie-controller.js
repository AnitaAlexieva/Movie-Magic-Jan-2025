import { Router } from "express";

const movieController = Router()

//на /create искаме да се изпълни този action
movieController.get('/create', (req, res)=>{
    res.render('create')
})
export default movieController