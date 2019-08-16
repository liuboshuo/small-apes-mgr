const Koa = require("koa")
const bodyparser = require("koa-bodyparser")
const compress = require("koa-compress")
const initRouter = require("./router")
const app = new Koa();

app.use(compress());
app.use(bodyparser());

initRouter(app);

const PORT = 8082;
app.listen(PORT,()=>{
    console.log(`Listening at http://localhost:${PORT}`)
})