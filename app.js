const Koa = require('koa');
const koaStatic = require('koa-static')
const bodyParser = require('koa-bodyparser')
const router = require('./router/index.js')
const path = require('path')
const app = new Koa()

app.use(koaStatic(path.join(process.cwd()),'public'))

app.use(bodyParser())

app.use(router.routes())//启动路由

app.use(router.allowedMethods())



app.listen('3000',() => {
    console.log('服务启动成功')
})

