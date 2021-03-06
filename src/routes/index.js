const newsRouter = require('./news')
const productsRouter = require('./products')
const meRouter = require('./me')
const userRouter = require('./user')
const siteRouter = require('./site')
// const loginRouter = require('./login')

function route(app){
      // app.use('/login', loginRouter)
      app.use('/news', newsRouter)
      app.use('/me', meRouter)
      app.use('/user', userRouter)
      app.use('/products', productsRouter)
      app.use('/', siteRouter)
      
}

module.exports = route