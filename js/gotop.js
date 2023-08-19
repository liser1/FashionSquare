var gotop = document.querySelector('.gotop')
/* console.log(gotop); */
window.onscroll = function(){
    var height = document.documentElement.scrollTop || document.body.scrollTop
    if(height >= 300){
        gotop.style.display = 'block'
    }else{
        gotop.style.display = 'none'
    }
}


gotop.onclick = function(){
    window.scrollTo({
        top:0,behavior:'smooth'
    })
}