const Mock = require("mockjs")

const data = Mock.mock({
    'list|12': [{
        'id|+1': 1,
        'resume_id|100-200': 1,
        'mobile':/^1(3|4|5|6|7|8|9)\d{9}$/,
        'email':'@email("gmail.com")',
        'title|1':[
            "iOS开发工程师",
            "Android开发工程师",
            "前端开发工程师",
            "Python开发工程师",
            "高级测试工程师",
            "java高级开发",
            "数据挖掘工程师",
            "高级产品经理",
            "初级java工程师"
        ],
        'status|1': true, // 状态
        'name': '@cname', // 名称
        'address': '@county(true)',
        'avatar': "@image('150x150', '#4A7BF7', 'img', 'png', 'resume')",  // 头像
        'create_time': '@datetime("yyyy-MM-dd HH:mm:ss")', // 创建日期
    }]
});

// 这里模拟数据库里的用户记录

module.exports = data;