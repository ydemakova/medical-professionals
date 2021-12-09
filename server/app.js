const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const usersRouter = require('./ressources/user/user.routes')
const articleRouter = require('./ressources/article/article.routes')
const app = express()

require('./database')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '../', 'public')))

app.use('/api/users', usersRouter)
app.use('/api/articles', articleRouter)

module.exports = app
