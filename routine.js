class classinfo{
    constructor(name,link="",id="0",pass="0"){
        this.name=name;
        this.link=link;
        this.id=id;
        this.pass=pass;
    }
}

//var anyname=new classinfo(name,link,id,pass) \\can skip the id and pass

var phy4241=new classinfo("Phy 4241 - FAK",
    "https://bdren.zoom.us/j/69963926248?pwd=VlVjMHBlQlJSVUFob0N4aHlwRHRUQT09",
    "699 6392 6248","897645");

var phy4242=phy4241; phy4242.name="Phy 4242 - FAK";

var math=new classinfo("Math 4241 - MA","https://bdren.zoom.us/j/4160336678",)

var cse4203=new classinfo("CSE 4203 - MRK",
    "https://meet.google.com/lookup/fo7t6dy74k");

var cse4202_1A=new classinfo("CSE 4202(1A) - FS,TIA",
    "https://bdren.zoom.us/j/67444734435");

var cse4202_1B=cse4202_1A; cse4202_1B.name="CSE 4202(1B) - FS,TIA";

var chem_thu=new classinfo("Chem 4241 - NI",
    "https://meet.google.com/lookup/fo7t6dy74k");

var chem_fri=chem_thu;
    chem_fri.link="https://meet.google.com/yoj-uava-evx";

var hum4242=new classinfo("HUM 4241 - AHM",
    "https://bdren.zoom.us/j/4260581703?pwd=MGdscVhtNE9ycHlCSWY5MWZvbXZIdz09",
    "426 058 1703","1hqye6");


/* addclass(classinfo,starting hour,starting minute,ending hour,ending minute)
   all time variables should be integers 

To make a notice the code will be like this
    today.addclass(//required parameters\\).notice("Messege from CR: fuck you")
*/


/*function Monday(){
    today.addclass(math,9,0,10,50);

    today.addclass(hum4242,16,15,18,5);
    today.addclass("CSE 4205 - MHA",14,10,15,0);
    today.addclass(cse4203,11,0,11,50);
}

function Tuesday(){
    today.addclass("CSE 4205 - MHA",9,0,9,50);
    today.addclass("HUM 4241 - MSH",12,0,12,50);
    
    today.addclass(cse4203,14,10,15,0);

    today.addclass(cse4202_1B,15,10,18,5);
}*/

function Wednesday(){
    today.addclass(phy4241,9,0,10,15);
    today.addclass(math,11,0,12,50);
    today.addclass(new classinfo("ACM Programming"),15,10,18,5);
}

/*function Thursday(){
    today.addclass("HUM 4241 - MSH",9,0,9,50);
    today.addclass("CSE 4205 - MHA",10,0,10,50);
    today.addclass(chem_thu,11,35,12,50);
    today.addclass(cse4203,14,10,15,0);
}*/