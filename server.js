// server.js
const jsonServer = require('json-server')

// create server variables
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const router = jsonServer.router('./data/db.json')
router.render = (req, res) => {
    res.jsonp({
        count: res.locals.data.length,
        results: res.locals.data
    })
}


// set server options
server.use(middlewares)
server.use('/api/v1', router)

// run server
server.listen(3000, () => {
  console.log('JSON Server is running')
})