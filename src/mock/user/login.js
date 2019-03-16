import Mock from 'mockjs'

const user = Mock.mock({
    userName: '@ADMIN',
    avatar: '@AVATAR',
    address: '@CITY',
    timefix: '@TIMEFIX',
});

Mock.mock('/login', 'post', ({ body }) => {
    let result = {}
    const { userName, password } = JSON.parse(body);

    if (userName !== 'admin' || password !== '888888') {
        result.status = -1
        result.message = '账户名或密码错误（admin/888888）'
    } else {
        result.status = 200;
        result.message = "登录成功";//Mock.mock('@TIMEFIX')
        result.data = user;
    }
    return result
});
