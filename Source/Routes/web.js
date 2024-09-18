import express from 'express'
const router =  express.Router()
import jobcontroller from '../Controller/jobcontroller.js'

router.get('/getAll' , jobcontroller.getJob)
router.post('/create' , jobcontroller.createJob)

export default router
