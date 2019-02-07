var navTxt=document.getElementsByClassName("nav_txt");
var caseLeft=document.getElementById("case_left");
var caseRight=document.getElementById("case_right");

for(var navi=0;navi<navTxt.length;navi++){
    navTxt[navi].onclick=function(ev){
        for(var navk=0;navk<navTxt.length;navk++){
            navTxt[navk].style.borderBottom="0";
        }
        this.style.borderBottom="0.02rem solid red";
        if(ev.target.id==="txt1"){
            caseRight.style.display="none";
            caseLeft.style.display="block";
        }else{
            caseLeft.style.display="none";
            caseRight.style.display="block";
        }
    }
}