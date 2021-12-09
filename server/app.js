const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const usersRouter = require('./ressources/user/users.routes')
const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '../', 'public')))

app.use('/api/users', usersRouter)
// app.use('/api/articles', usersRouter)
// app.use('/api/appointments', usersRouter)

module.exports = app
