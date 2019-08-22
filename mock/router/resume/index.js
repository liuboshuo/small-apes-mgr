const Router = require("koa-router")
const router = new Router();
const Mock = require("mockjs")
const resumeList = require("./data").list;


router.get("/api/resume",async (ctx)=>{
    ctx.body = {code:0,message:"success",data:resumeList}
});

router.delete("/api/resume/:id",async (ctx)=>{
    const {id} = ctx.params;
    if(id == null) {
        ctx.body = {code:1,message:"参数错误"}
        return;
    }
    
    const index = resumeList.findIndex(item=>{
        return item.id === id;
    })
    resumeList.splice(index, 1);

    ctx.body = {code:0,message:"success"}
});


router.post("/api/resume/update",async (ctx)=>{
    const {id,status} = ctx.request.body;
    if(id == null) {
        ctx.body = {code:1,message:"参数错误"}
        return;
    }
    const item = resumeList.find(item=>{
        return item.id === id;
    })
    item.status = status;
    ctx.body = {code:0,message:"success"}
});


module.exports = router;