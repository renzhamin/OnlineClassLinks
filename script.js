
class newclass{
    constructor(classinf,starth,startm,hour,minutes){
        this.inf=classinf;
        this.minutes=minutes;
        this.hour=hour+this.minutes/60;
        this.starth=starth;
        this.startm=startm;
        this.messege="";
    }
    notice(messege){
        this.messege=messege;
    }
}

var cur = new Date();
var h=cur.getHours()+cur.getMinutes()/60;
class Day {
    constructor(){
        this.arr=[];
    }
    addclass(inf,starth,startm,hour,minutes=0){
        var ln=this.arr.length;
        this.arr[ln]=new newclass(inf,starth,startm,hour,minutes);
        return this.arr[ln];
    }
    sortclass(){
        this.arr.sort(function(a,b){
            if(a.hour>=h && b.hour>=h) 
                return a.hour-b.hour;            

            if(a.hour<h && b.hour>=h)
                return 1;

            if(a.hour>=h && b.hour<h)
                return -1;

            if(a.hour<b.hour)
                return -1;

            return 1;            
        })
    }
}


var today=new Day();


function AddclasstoDay(id){
    if(id==1) Monday();
    if(id==3) Wednesday();
}
AddclasstoDay(cur.getDay());
today.sortclass();

var text="";

var firstclass=today.arr[0];

if(firstclass.starth+firstclass.startm/60>h){
    text=`<p id="timer"></p>`;
}

async function copytoclipboard(text) {
  await navigator.clipboard.writeText(text);
}

function showClass(curclass){
    var curTextcolor="red";
    var sm=curclass.startm;
    var em=curclass.minutes;
    var meeting="";
    var messege="";
    var ss="am",es="pm";
    var sh=curclass.starth,eh=Math.floor(curclass.hour);
    if(sh>=12) ss="pm";
    if(eh<=12) es="am";
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


if(text!="") {
    showtimer();
}

var n=today.arr.length;
for(var i=0;i<n;i++){
    showClass(today.arr[i]);
}


(function(){
    window.addEventListener('load',function(){
        var elm=document.getElementsByTagName("body")[0];
        elm.innerHTML+=text;
    });
})();



function showtimer(){

    var x = setInterval(function() {
        
    var distance = -cur.getHours()-cur.getMinutes()/60+
                 firstclass.starth+firstclass.startm/60;
    
    if(distance<0){
        clearInterval(x);
    }

    var hours = Math.floor(distance);
    var minutes = Math.floor((distance-hours)*60);
 

    document.getElementById("timer").innerHTML = "Next class in " +
    hours + "h "+ minutes + "m ";
    
    }, 1000);

}