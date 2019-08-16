const Router = require("koa-router")
const router = new Router();
const Mock = require("mockjs")
const userlist = require("./data").list;


router.get("/api/user/list",async (ctx)=>{
    ctx.body = {code:0,message:"success",data:userlist}
});

router.post("/api/user/add",async (ctx)=>{
    let data = ctx.request.body;
    data.id = userlist[userlist.length-1].id + 1;
    const mock = Mock.mock({
        'user_id|100-200': 1,
        'status|1': false, // 状态
        'avatar': "@image('150x150', '#4A7BF7', 'img', 'png', 'Tiger')",  // 头像
        'create_time': '@datetime("yyyy-MM-dd HH:mm:ss")', // 创建日期
    })
    data = Object.assign(data,mock);
    userlist.push(data)
    ctx.body = {code:0,message:"success"}
});

module.exports = router;