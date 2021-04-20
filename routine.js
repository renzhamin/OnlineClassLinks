
//var anyname=new classinfo(name,link,id,pass) \\can skip the id and pass

var DS = new classinfo("Data Structures","https://bdren.zoom.us/j/67706040993");
var COA = new classinfo("Mafia","https://bdren.zoom.us/j/68527456083");
var LA = new classinfo("Linear Algebra","404");
var EEE = new classinfo("EEE","404");
var EEE_Lab = new classinfo("EEE_Lab","404");
var DBMS = new classinfo("DBMS","http://meet.google.com/ohp-mqxh-ndf");
var DBMS_Lab = new classinfo("DBMS_Lab","http://meet.google.com/ohp-mqxh-ndf");
var OOP = new classinfo("OOP","404");
var OOP_Lab = new classinfo("OOP Lab","404");


var noticestyle=`
    font-style:italic;
    color: #84fffa;
    font-size:1.8rem;
    padding-bottom:1em;
`;


//today.notice=`
//<div style="${noticestyle}">
//    Notice : Hello beautiful people <br>
//    Have a nice day
//</div>
//`;

//var hum4242=new classinfo("Arabic II - AHM",
//    "https://us04web.zoom.us/j/77060383286?pwd=cG5NSldpR3o2cTZKaTA3NE5HNUgwQT09",
//    "770 6038 3286","4kQCHQ"); 
//var room1=new classinfo("1-24,59","https://bdren.zoom.us/j/2267000409");
//var room2=new classinfo("25-48","https://bdren.zoom.us/j/8130856916");

/* addclass(classinfo,starting hour,starting minute,
                    ending hour,ending minute)

   all time variables should be integers 

To make a notice the code will be like this
    today.addclass(//required parameters\\).notice("Messege from CR: fuck you")
*/


function Monday(){
    today.addclass(DS,10,50,11,50);
    today.addclass(LA,12,0,13,0);
    today.addclass(EEE,13,30,14,30);
}


function Tuesday(){
    today.addclass(COA,9,40,10,40);
    today.addclass(DS,10,50,11,50);
    today.addclass(DBMS,12,0,13,0);
    today.addclass(EEE_Lab,13,30,14,30);
}

function Wednesday(){
    today.addclass(DS,9,40,10,40);
    today.addclass(DBMS_Lab,9,40,10,40);
    today.addclass(DBMS,12,0,13,0);
    today.addclass(EEE,13,30,14,30);
}

function Thursday(){
    today.addclass(COA,9,40,10,40);
    today.addclass(OOP,12,0,13,0);
    today.addclass(OOP_Lab,15,50,16,50);
}

function Friday(){
    today.addclass(DS,9,40,10,40);
    today.addclass(DBMS_Lab,9,40,10,40);
    today.addclass(LA,12,0,13,0);
    today.addclass(OOP,13,30,14,30);
    today.addclass(OOP_Lab,15,50,16,50);
}

function Saterday(){
    //    
}
function Sunday(){
    //
}


