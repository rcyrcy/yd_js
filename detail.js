var synop=document.getElementById("synopsis");
var xiala=document.getElementById("xiala");
var syflag=true;
xiala.onclick=function(){
    if(syflag){
        synop.style.height="1.38rem";
        xiala.style.top="2.93rem";
        syflag=false;
    }else{
        synop.style.height="0.38rem";
        xiala.style.top="1.43rem";
        syflag=true;
    }
};

var bilImg=document.getElementById("billing_img");
var billing=document.getElementById("billing");
var photo=document.getElementById("photo_img");
var stage=document.getElementById("stage_photo");
var bi=0;
var timer=null;
autoplay();
billing.onmouseover=function(){
    clearInterval(timer)
}
stage.onmouseover=function(){
    clearInterval(timer)
}

billing.onmouseout=function(){
    autoplay()
}

stage.onmouseout=function(){
    autoplay()
}
function autoplay(){
    timer=setInterval(function () {
    bi++;
    if(bi>=3) {
        bilImg.style.left = "0";
        photo.style.left = "0";
        bi=0; 
    }
        move(bilImg,"left",-0.875*bi);
        move(photo,"left",-0.875*bi);
    }, 3000)
}


function move(ele, dir, end) {
    clearInterval(ele.timer)
    if(dir==="left") {
        ele.timer=setInterval(function(){
            ele.style.left=ele.offsetLeft-0.30+"rem";
            if(ele.offsetLeft<=end){
                clearInterval(ele.timer);
                ele.style.left=end+"rem";
            }
        })
    }else{
        ele.timer=setInterval(function(){
            ele.style.left=ele.offsetLeft+0.30+"rem";
            if(ele.offsetLeft>=end){
                clearInterval(ele.timer);
                ele.style.left=end+"rem";
            }
        });
    }
}


