const PORT = 5000
// const path= require('path')
const jsonServer= require('json-server')
const server = jsonServer.create()
const router= jsonServer.router('data.json')
const middlewares = jsonServer.defaults()
server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use('',router)
server.listen(PORT, ()=> console.log(`JSON Server is running on port ${PORT}`))