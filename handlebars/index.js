const path = require('path')
const express = require('express')
const port = 3000
const exphbs = require('express-handlebars')

const app = express()

app.engine('.hbs' , exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutDirs: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (request, response) => {
  response.render('home', {
    name: 'Andrew',
  })
})

app.listen(port)
