var a=1

var interval = setInterval(lunbo,4000);
function chose(b){
    a = b-1
    lunbo()
    clearInterval(interval)
    interval = setInterval(lunbo,4000);
}
function lunbo(){
    a++;
    if(a>3){
        a=1;
    }
    var img=document.getElementById('img_lunbo')
    img.src='images/shouye/pic'+a+'.jpg'
    color()
/*     document.getElementById('li'+a).style.background='yellow' */
}
function color(){
    if(a==1){
        document.getElementById('li1').style.background='#f60'
        document.getElementById('li2').style.background='gray'
        document.getElementById('li3').style.background='gray'
    }else if(a==2){
        document.getElementById('li2').style.background='#f60'
        document.getElementById('li1').style.background='gray'
        document.getElementById('li3').style.background='gray'
    }else{
        document.getElementById('li3').style.background='#f60'
        document.getElementById('li1').style.background='gray'
        document.getElementById('li2').style.background='gray'
    }
}