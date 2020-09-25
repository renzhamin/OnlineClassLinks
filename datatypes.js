class classinfo{
    constructor(name,link="",id="0",pass="0"){
        this.name=name;
        this.link=link;
        this.id=id;
        this.pass=pass;
    }
}


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
        this.notice="";
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
