import express from 'express'
import bodyParser from 'body-parser'
const app=express()
import todoRoutes from './routes/todos'
app.use(todoRoutes)
app.use(bodyParser.json())
app.listen({port:3000})