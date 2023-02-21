const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect('mongodb://localhost:27017/recipes', { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(cors())
app.use(express.json())

const recipesRouter = require('./routes/recipes')
app.use('/recipes', recipesRouter)

app.listen(3000, () => console.log('Server Started'))