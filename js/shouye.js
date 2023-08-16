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
}