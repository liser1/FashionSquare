function titlechoose(a){
    if(a==1){
        document.getElementById('p1').className='p1'
        document.getElementById('p2').className=''
        document.getElementById('p3').className=''
        document.getElementById('goods1').style.display='block'
        document.getElementById('goods2').style.display='none'
        document.getElementById('goods3').style.display='none'
    }else if(a==2){
        document.getElementById('p1').className=''
        document.getElementById('p2').className='p1'
        document.getElementById('p3').className=''
        document.getElementById('goods1').style.display='none'
        document.getElementById('goods2').style.display='block'
        document.getElementById('goods3').style.display='none'
    }else{
        document.getElementById('p1').className=''
        document.getElementById('p2').className=''
        document.getElementById('p3').className='p1'
        document.getElementById('goods1').style.display='none'
        document.getElementById('goods2').style.display='none'
        document.getElementById('goods3').style.display='block'
    }
}




/*放大镜*/
//元素调取
var lens = document.getElementById('lens')

var fdj = document.getElementById('fdj')

var bigPic = document.getElementById('bigPic')

var yifuIm = document.getElementById('yifuIm')

var picshow = document.getElementById('picShow')
//更换背景图片
function pic(a){
    /* console.log(a); */
    picshow.style.backgroundImage = 'url(../images/show' + a + '.jpg)'
    fdj.style.backgroundImage = 'url(../images/show' + a + '.jpg)'
}

//放大镜功能实现
bigPic.onmouseover = function(){
    lens.style.display = 'block'
    fdj.style.display = 'block'
}
bigPic.onmousemove = function(e){
    var height = document.documentElement.scrollTop || document.body.scrollTop
    var x=e.clientX - yifuIm.offsetLeft - 110;
    var y=e.clientY + height - yifuIm.offsetTop - 150;
    if(x<0){
        x=0
    }else if(x>200){
        x=200
    }
    if(y<0){
        y=0
    }else if(y>200){
        y=200
    }
    lens.style.left = x + 'px'
    lens.style.top = y + 'px'
    fdj.style.backgroundPositionX = -x*2 + 'px'
    fdj.style.backgroundPositionY = -y*2 + 'px'
}
bigPic.onmouseleave = function(){
    lens.style.display = 'none'
    fdj.style.display = 'none'
}