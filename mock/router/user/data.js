const Mock = require("mockjs")

const data = Mock.mock({
    'list|1-10': [{
        'id|+1': 1,
        'user_id|100-200': 1,
        'status|1': true, // 状态
        'user_name': '@cname', // 名称
        'avatar': "@image('150x150', '#4A7BF7', 'img', 'png', 'Tiger')",  // 头像
        'create_time': '@datetime("yyyy-MM-dd HH:mm:ss")', // 创建日期
    }]
});

// 这里模拟数据库里的用户记录

module.exports = data;