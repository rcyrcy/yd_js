
var main=document.getElementById("main");

var pinajax=new XMLHttpRequest;
pinajax.open("get","../php/99pintuan.php",true);
pinajax.send(null);
pinajax.onreadystatechange=function(){
    if(pinajax.readyState===4&&pinajax.status===200){
        var pindata=JSON.parse(pinajax.responseText);
        var pinstr="";
        for(var pini=0;pini<pindata.length;pini++){
            pinstr+=`
            <div class="case">
                <a href="#">
                    <img  class="case_img" src="${pindata[pini].imgurl}">
                </a>
                <a class="case_txt" href="#">${pindata[pini].cont}</a>
                <a class="case_txt2" href="#">${pindata[pini].cont2}</a>
                <a class="case_money" href="#">￥${pindata[pini].money}</a>
                <a class="case_user">
                    <img class="user1" src="${pindata[pini].user}">
                    <img class="user1" src="${pindata[pini].user2}">
                </a>
                <a class="bnt" href="login2.html">去拼单</a>
            </div>
            `
        }
        main.innerHTML=pinstr;
    }
};