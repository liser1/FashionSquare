function titlechoose(a){
    const P = document.querySelectorAll('.goods_title p')
    const Goods = document.querySelectorAll('.goods')
    for(let i=1;i<=3;i++){
        let goods = Goods[i-1]
        let p = P[i-1]
        p.className=''
        goods.style.display='none'
    }
    P[a-1].className='p1'
    Goods[a-1].style.display='block'
    /* const p1 = document.querySelector('#p1')
    const p2 = document.querySelector('#p2')
    const p3 = document.querySelector('#p3')
    const goods1 = document.querySelector('#goods1')
    const goods2 = document.querySelector('#goods2')
    const goods3 = document.querySelector('#goods3') 
    if(a==1){
        p1.className='p1'
        console.log(p1);
        p2.className=''
        p3.className=''
        goods1.style.display='block'
        goods2.style.display='none'
        goods3.style.display='none'
    }else if(a==2){
        p1.className=''
        p2.className='p1'
        document.getElementById('p3').className=''
        goods1.style.display='none'
        goods2.style.display='block'
        goods3.style.display='none'
    }else{
        p1.className=''
        p2.className=''
        document.getElementById('p3').className='p1'
        goods1.style.display='none'
        goods2.style.display='none'
        goods3.style.display='block'
    } */
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

    var x=e.pageX - yifuIm.offsetLeft - 110;
    var y=e.pageY - yifuIm.offsetTop - 150;
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