var sheng=document.querySelector('#sheng')
var shi=document.querySelector('#shi')
var qu=document.querySelector('#qu')
var frag = document.createDocumentFragment()
for(i=0;i<provice.length;i++){
    var option = document.createElement('option')
    option.value = option.innerHTML = provice[i]['name']
    /* console.log(option.value); */
    frag.appendChild(option)
}
sheng.appendChild(frag)
var shiArr=[]
var quArr=[]
sheng.onchange = function(){
    shi.innerHTML='<option value="">-请选择城市-</option>'
    qu.innerHTML='<option value="">-请选择地区-</option>'
    for(i=0;i<provice.length;i++){
        if(provice[i].name == this.value){
            shiArr = provice[i].city
            break
        }
    }
    for(j=0;j<shiArr.length;j++){
        var option = document.createElement('option')
        option.value = option.innerHTML = shiArr[j]['name']
/*         console.log(option.value) */
        frag.appendChild(option)
    }
    shi.appendChild(frag)
}

shi.onchange = function(){
    qu.innerHTML='<option value="">-请选择地区-</option>'
    for(i=0;i<shiArr.length;i++){
        if(shiArr[i].name == this.value){
            quArr = shiArr[i].districtAndCounty
            break
        }
    }
    for(j=0;j<quArr.length;j++){
        var option = document.createElement('option')
        option.value = option.innerHTML = quArr[j]
        console.log(option.value)
        frag.appendChild(option)
    }
    qu.appendChild(frag)
}