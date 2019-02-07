var cajax=new XMLHttpRequest;
cajax.open("get","php/case.php",true);
cajax.send(null);
cajax.onreadystatechange=function(){
    if(cajax.readyState===4&&cajax.status===200){
        var cdata=JSON.parse(cajax.responseText);
        var cstr="";
        for(var casei=0;casei<cdata.length;casei++){
            cstr+=`
            <div class="case_section">
                <a href="html/detail.html">
                    <img class="case_img" src="${cdata[casei].imgurl}">
                </a>
                    <div class="case_txt">
                        <p class="case_nameTxt"><a href="html/detail.html">${cdata[casei].cont}</a><span class="case_nameTxt_2D">2D</span></p>
                        <p class="case_pingfen">观众评分<em>${cdata[casei].pingfen}</em></p>
                        <p class="case_yanyuan"><a href="html/detail.html">${cdata[casei].yanyuan}</a></p>
                        <p class="case_time"><a href="html/detail.html">${cdata[casei].country}|${cdata[casei].time}</a></p>
                    </div>
                    <div class="goupiao"><a href="html/detail.html">购票</a></div>
            </div>
            `
        }
        caseLeft.innerHTML=cstr
        caseRight.innerHTML=cstr
    }
}