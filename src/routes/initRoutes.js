function initRoutes(app) {
  app.get('/', (req, res) => {
    // res.render('index', null, { cache: true })
    // res.render('index', { layout: false })
    res.render('index')
  })
  app.get('*', (req, res) => {
    // res.render('index', null, { cache: true })
    // res.render('index', { layout: false })
    res.redirect('/')
  })
}

module.exports = initRoutes