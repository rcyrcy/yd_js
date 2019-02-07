var ban=document.getElementById("banner1");
var head=document.getElementById("head");
var page=document.getElementsByClassName("page_dian");
var bi=0;
var timer=null;
autoplay();

head.onmouseover=function(){
    clearInterval(timer)
}
head.onmouseout=function(){
    autoplay()
}

function autoplay(){
    timer=setInterval(function () {
    bi++;
    if(bi>=7) {
        ban.style.left = "0";
        bi=1; 
    }
        move(ban,"left",-3.75*bi);
        pageCSS()
    }, 3000)
}

function pageCSS(){
    for(var bt=0;bt<page.length;bt++){
        page[bt].style.background="none";
    }
    page[bi===6?0:bi].style.background="#fff";
}


// for(var bk=0;bk<bpage.length;bk++){
//     bpage[bk].index=bk;
//     // bpage[bk].onclick=function(){
//     //     if(this.index>bi){
//     //         bmove(ban, "left", -3.75 * this.index);
//     //     }else{
//     //         bmove(ban, "right", -3.75 * this.index);
//     //     }
//     //     bi=this.index;
//     //     console.log(this.index);
//     //     console.log(this);
//     // }
// }


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