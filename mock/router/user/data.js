const Mock = require("mockjs")

const data = Mock.mock({
    'list|1-10': [{
        'id|+1': 1,
        'user_id|100-200': 1,
        'mobile':/^1(3|4|5|6|7|8|9)\d{9}$/,
        'email':'@email("gmail.com")',
        'status|1': true, // 状态
        'user_name': '@cname', // 名称
        'address': '@county(true)',
        'avatar': "@image('150x150', '#4A7BF7', 'img', 'png', 'user')",  // 头像
        'create_time': '@datetime("yyyy-MM-dd HH:mm:ss")', // 创建日期
    }]
});

// 这里模拟数据库里的用户记录

module.exports = data;