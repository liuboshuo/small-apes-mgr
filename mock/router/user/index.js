const Router = require("koa-router")
const router = new Router();
const Mock = require("mockjs")
const userlList = require("./data").list;

/**
 * 获取用户列表
 */
router.get("/api/user",async (ctx)=>{
    ctx.body = {code:0,message:"success",data:userlList}
});

/**
 * 添加用户
 */
router.put("/api/user",async (ctx)=>{
    let data = ctx.request.body;
    data.id = userlList[userlList.length-1].id + 1;
    const mock = Mock.mock({
        'user_id|100-200': 1,
        'status|1': false, // 状态
        'address': '@county(true)',
        'avatar': "@image('150x150', '#4A7BF7', 'img', 'png', '新用户')",  // 头像
        'create_time': '@datetime("yyyy-MM-dd HH:mm:ss")', // 创建日期
    })
    data = Object.assign(data,mock);
    userlList.push(data)
    ctx.body = {code:0,message:"success"}
});

/**
 * 修改状态
 */
router.post("/api/user/update",async (ctx)=>{
    const {id,status} = ctx.request.body;
    if(id == null) {
        ctx.body = {code:1,message:"参数错误"}
        return;
    }
    const item = userlList.find(item=>{
        return item.id === id;
    })
    item.status = status;
    ctx.body = {code:0,message:"success"}
})
module.exports = router;