import express from 'express'
import cors from 'cors'
import Router from './Source/Routes/web.js'
import dotenv from 'dotenv'
dotenv.config()

const port = 8000

const app = express()
app.use(express.json())
app.use(cors())
app.use('/', Router)



app.listen(port , ()=> {
    console.log(`Applistening port  ${port}`)
})