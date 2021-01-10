var noticestyle=`
    font-style:italic;
    color: #84fffa;
    font-size:1.8rem;
    padding-bottom:1em;
`;

var room1=new classinfo("1-24,59","https://bdren.zoom.us/j/2267000409");
var room2=new classinfo("25-48","https://bdren.zoom.us/j/8130856916");

//today.notice=`
//<div style="${noticestyle}">
//    Notice : Hello beautiful people <br>
//    Have a nice day
//</div>
//`;

//var anyname=new classinfo(name,link,id,pass) \\can skip the id and pass


var hum4242=new classinfo("Arabic II - AHM",
    "https://us04web.zoom.us/j/77060383286?pwd=cG5NSldpR3o2cTZKaTA3NE5HNUgwQT09",
    "770 6038 3286","4kQCHQ"); 

var cse4205=new classinfo("Digital Logic Design - MHA",
    "https://bdren.zoom.us/j/65023840869");

var ACM=new classinfo("ACM Programming");


var phy4241=new classinfo("Physics II - FAK",
    "https://bdren.zoom.us/j/68523563449?pwd=TFZ1VGpJNWswWXZERzZLQ0l5ZE5vdz09",
    "685 2356 3449","809878");

var phy4242=new classinfo("",phy4241.link,phy4241.id,phy4241.pass); 
    phy4242.name="Physics II Lab - FAK (1A/1B)";

var math=new classinfo("Calculas - MA",
    "https://bdren.zoom.us/j/4160336678");

var cse4203=new classinfo("Discrete Math - MRK",
    "https://meet.google.com/lookup/fo7t6dy74k");


var cse4202_1A=new classinfo("Programming Lab(1A) - FS,TIA",
    "");

var cse4202_1B=new classinfo("",cse4202_1A.link); 
    cse4202_1B.name="Programming Lab(1B) - FS,TIA";

var chem_thu=new classinfo("Chem 4241 - NI",
    "https://meet.google.com/vhx-urhg-xsr");

var chem_fri=new classinfo(chem_thu.name);
    chem_fri.link="https://meet.google.com/yoj-uava-evx";

var hum4241=new classinfo("Islamic History - MSH",
    "https://bdren.zoom.us/j/4260581703?pwd=MGdscVhtNE9ycHlCSWY5MWZvbXZIdz09",
    "426 058 1703","1hqye6");


/* addclass(classinfo,starting hour,starting minute,
                    ending hour,ending minute)

   all time variables should be integers 

To make a notice the code will be like this
    today.addclass(//required parameters\\).notice("Messege from CR: fuck you")
*/


function Monday(){
    today.addclass(math,9,0,10,50);

    today.addclass(cse4203,11,0,11,50);
    cse4205.link="https://bdren.zoom.us/j/65333781205";

    today.addclass(cse4205,12,0,12,50);
    today.addclass(hum4242,16,15,18,5);
}

var lxd=`
    <a target=0 href="https://classroom.google.com/c/MTc4NDAxMDc3NTQ1">
    ${cse4203.name} Classroom
    </a>
`

function Tuesday(){
    today.addclass(cse4205,11,0,11,50);
    today.addclass(hum4241,12,0,12,50);
    today.addclass(cse4203,14,10,15,0);
    // today.addclass(cse4202_1A,15,10,18,5).notice("Check google classroom for links");
}

function Wednesday(){
    today.addclass(phy4241,9,0,10,15);
    today.addclass(math,11,0,12,50);
    // today.addclass(ACM,15,10,18,5);
}

function Thursday(){
    today.addclass(hum4241,9,0,9,50);

    cse4205.link="https://bdren.zoom.us/j/69292892823";
    today.addclass(cse4205,10,0,10,50);

    today.addclass(chem_thu,11,35,12,50);
    today.addclass(cse4203,14,10,15,0);
    today.addclass(phy4242,15,10,18,5);
}

function Friday(){
    today.addclass(phy4241,9,0,10,15);
    today.addclass(chem_fri,11,0,12,15);
    // today.addclass(cse4205,15,30,16,20);
    //today.addclass(cse4202_1B,15,10,18,5);
}



function Saterday(){
    //    
}
function Sunday(){
    //
}


function exam(){
    today.addclass(room1,9,0,13,0);
    today.addclass(room2,9,0,13,0);
}
