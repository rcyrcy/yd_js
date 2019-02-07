var phoneNum=document.getElementById("phone_num");
var phoneHint=document.getElementById("phone_hint");
var phoneTxt=document.getElementById("phone_txt");
var ma=document.getElementById("ma");
var yanNum=document.getElementById("yanzhen_num");
var yanHint=document.getElementById("yanzhen_hint");
var denglu=document.getElementById("denglu");



function shouji(){
    var tela=/^1\d{10}$/;
    var telb=tela.test(phoneNum.value);
    return telb
}
phoneNum.onblur=function(){
    if(shouji()){
        phoneHint.style.display="block";
        phoneHint.style.color="#8efeae";
        phoneHint.innerText="手机号码格式正确";
    }else{
        phoneHint.style.display="block";
        phoneHint.style.color="red";
        phoneHint.innerText="手机号码格式不正确";
    }
}



var parr=["a","b","c","d","e","f","g","1","2","3","4","5","6"]
phoneTxt.onclick=function(){
    var pstr=""
    for(var pi=0;pi<6;pi++){
        var pk=Math.floor(parr.length*Math.random());
        pstr+=parr[pk]
    }
    ma.innerHTML=pstr;
}


function yanzhen(){
    return ma.innerText===yanNum.value||ma.innerText.toUpperCase()===yanNum.value.toUpperCase();     
}

yanNum.onblur=function(){
    if(yanzhen()){
        yanHint.style.display="block";
        yanHint.style.color="#8efeae";
        yanHint.innerText="验证码输入正确";
    }else{
        yanHint.style.display="block";
        yanHint.style.color="red";
        yanHint.innerText="验证码输入不正确";
    }
    if(yanNum.value===""){
        yanHint.style.display="block";
        yanHint.style.color="red";
        yanHint.innerText="验证码输入不正确";
    }
}



denglu.onclick=function(){
    if(shouji()&&yanzhen()){
        denglu.href="../index.html"
    }else{
        
    }
}