function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    /* if (username === 'admin' && password === '123') {
        alert('登录成功');
        window.location.href = '../layuiAdmin/layuiAdmin.v1.2.1 std/views/index.html';
    } else {
        alert('登录失败！请检查你的账号或密码。');
    } }*/

    if (username === 'admin'){
        if(password === '123'){
            alert('登录成功');
            window.location.href = 'layuiAdmin/layuiAdmin.v1.2.1 std/views/index.html';
        }else if(password == 0){
        }
        else if(password == 0){
            alert('请输入您的密码！');
        }
        else{
            alert('密码输入错误！请检查您的密码。');
        }
    }
    else if(username == 0){
        alert('请输入您的账号！');
    }
    else{
        alert('账号输入错误！请检查您的账号。');
    }
}

function goToHomePage(){
    window.location.href='shouye.html';//暂不登录，返回首页。
}