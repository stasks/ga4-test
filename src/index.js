const express = require('express')
const path = require('path')
const helmet = require('helmet')
const { SERVER_PORT } = require('./config')
const initRoutes = require('./routes/initRoutes')


const app = express()
app.set('trust proxy', 1)
app.disable('x-powered-by')

app.all('*', function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, DELETE')
  next()
})

// app.use(helmet())
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  })
)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'ejs')
// app.enable('view cache') // important !!!!!!!!!!!!!!!!!!!!!!!!!
app.set('views', path.join(__dirname, '/../views'))

// app.use(expressLayouts)
// app.set('layout', path.join(__dirname, '/../views/layouts/main-page'))

initRoutes(app)

app.listen(SERVER_PORT)
console.log(`Server ON ${SERVER_PORT}`)
