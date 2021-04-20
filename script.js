function AddclasstoDay(id){
    if(id==0) Sunday();
    if(id==1) Monday();
    if(id==2) Tuesday();
    if(id==3) Wednesday();
    if(id==4) Thursday();
    if(id==5) Friday();
    if(id==6) Saterday();
}

AddclasstoDay(cur.getDay()); today.sortclass();

var text=today.notice;

var n=today.arr.length;

var firstclass;

var wait=0;

if(n==0){
    alert("No class today,happy dreams");
} else {
    firstclass=today.arr[0];
    if(firstclass.starth+firstclass.startm/60>h){
        text+=`<p id="timer"></p>`;
        wait=1;
    }
}




async function copytoclipboard(text) {
  await navigator.clipboard.writeText(text);
}

function showClass(curclass){
    var curTextcolor="#f22320";
    var sm=curclass.startm;
    var em=curclass.minutes;
    var meeting="";
    var messege="";
    var ss="am",es="pm";
    var sh=curclass.starth,eh=Math.floor(curclass.hour);
    if(sh>=12) ss="pm";
    if(eh<12) es="am";
    if(sh!=12) sh%=12;
    if(eh!=12) eh%=12;
    var id=curclass.inf.id;

    if(id!="0"){
        meeting=`Meeting ID : ${id} &nbsp
        <button onclick="copytoclipboard('${id}');">copy</button><br>
        Password &nbsp &nbsp: ${curclass.inf.pass} &nbsp
        <button onclick="copytoclipboard('${curclass.inf.pass}');">copy</button><br>
        `
    }
    if(curclass.messege!=""){
        messege=`${curclass.messege}`;
    }
    if(sm<10) sm+="0";
    if(em<10) em+="0";
    if(curclass.hour<h) curTextcolor="grey";

    text+=`<a target=0 style="color:${curTextcolor}" class="classProp" href=${curclass.inf.link}>
    ${curclass.inf.name}</a> &nbsp 
    <button onclick="copytoclipboard('${curclass.inf.link}');">copy link</button><br>
    <p>
    From <span class="time">${sh}:${sm} ${ss}</span> to
    <span class="time">${eh}:${em} ${es}<br></span>
    ${meeting}${messege}
    </p>
    `;

}




for(var i=0;i<n;i++){
    showClass(today.arr[i]);
}


(function(){
    window.addEventListener('load',function(){
        var elm=document.getElementsByTagName("body")[0];
        elm.innerHTML+=text;
        if(wait==1) showtimer();
    });
})();



function showtimer(){        1
    var distance = -h+firstclass.starth+firstclass.startm/60;
    
    if(distance<0){
        return;
    }

    var hours = Math.floor(distance);
    var minutes = Math.floor((distance-hours)*60);
 
    var t=document.getElementById("timer");
    if(t){
        t.innerHTML = "Next class in " +
        hours + "h "+ minutes + "m ";
    }
}

setTimeout(function(){
   window.location.reload(1);
}, 60000);
