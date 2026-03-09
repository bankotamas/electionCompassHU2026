const parties = [
"Fidesz",
"Tisza",
"DK",
"Momentum",
"Mi Hazánk"
]

const questions = [

{
q:"Támogatnád az euró bevezetését?",
answers:[
{
text:"Igen",
points:{Momentum:2,DK:2,Tisza:1},
axis:{econ:-1,soc:-1}
},
{
text:"Nem",
points:{Fidesz:2,"Mi Hazánk":2},
axis:{econ:1,soc:1}
}
]
},

{
q:"Szorosabb EU integrációt szeretnél?",
answers:[
{text:"Igen",points:{Momentum:2,DK:2,Tisza:1},axis:{econ:-1,soc:-1}},
{text:"Nem",points:{Fidesz:2,"Mi Hazánk":2},axis:{econ:1,soc:1}}
]
},

{
q:"Növelni kell az egészségügy finanszírozását?",
answers:[
{text:"Igen",points:{Tisza:2,DK:2,Momentum:2},axis:{econ:-1,soc:0}},
{text:"Nem",points:{Fidesz:1},axis:{econ:1,soc:0}}
]
},

{
q:"Szigorúbb bevándorláspolitika kell?",
answers:[
{text:"Igen",points:{Fidesz:2,"Mi Hazánk":2},axis:{econ:0,soc:2}},
{text:"Nem",points:{Momentum:2,DK:2,Tisza:1},axis:{econ:0,soc:-2}}
]
},

{
q:"Legalizálnád a melegházasságot?",
answers:[
{text:"Igen",points:{Momentum:2,DK:2,Tisza:1},axis:{econ:0,soc:-2}},
{text:"Nem",points:{Fidesz:2,"Mi Hazánk":2},axis:{econ:0,soc:2}}
]
},

{
q:"Több állami szerep kell a gazdaságban?",
answers:[
{text:"Igen",points:{Fidesz:1,DK:1},axis:{econ:-2,soc:0}},
{text:"Nem",points:{Momentum:2},axis:{econ:2,soc:0}}
]
},

{
q:"Fontosabb az alacsony adó mint a magas állami szolgáltatás?",
answers:[
{text:"Igen",points:{Fidesz:2},axis:{econ:2,soc:0}},
{text:"Nem",points:{Momentum:2,DK:2,Tisza:1},axis:{econ:-2,soc:0}}
]
},

{
q:"Támogatnád az oktatási rendszer reformját?",
answers:[
{text:"Igen",points:{Momentum:2,Tisza:2,DK:1},axis:{econ:-1,soc:-1}},
{text:"Nem",points:{Fidesz:1},axis:{econ:1,soc:1}}
]
},

{
q:"Legyen kötelező kvóta az EU-ban a menekültekre?",
answers:[
{text:"Igen",points:{Momentum:2,DK:2},axis:{econ:0,soc:-2}},
{text:"Nem",points:{Fidesz:2,"Mi Hazánk":2},axis:{econ:0,soc:2}}
]
},

{
q:"Erősebb környezetvédelmi szabályozás kell?",
answers:[
{text:"Igen",points:{Momentum:2,DK:2,Tisza:1},axis:{econ:-1,soc:-1}},
{text:"Nem",points:{Fidesz:1},axis:{econ:1,soc:1}}
]
},

{
q:"Legyen progresszív jövedelemadó?",
answers:[
{text:"Igen",points:{DK:2,Momentum:1},axis:{econ:-2,soc:0}},
{text:"Nem",points:{Fidesz:2},axis:{econ:2,soc:0}}
]
},

{
q:"Fontosabb a nemzeti szuverenitás az EU döntéseknél?",
answers:[
{text:"Igen",points:{Fidesz:2,"Mi Hazánk":2},axis:{econ:0,soc:2}},
{text:"Nem",points:{Momentum:2,DK:2,Tisza:1},axis:{econ:0,soc:-2}}
]
},

{
q:"Legyen állami bérlakás program?",
answers:[
{text:"Igen",points:{DK:2,Tisza:1},axis:{econ:-2,soc:0}},
{text:"Nem",points:{Fidesz:1},axis:{econ:2,soc:0}}
]
},

{
q:"Szabadabb média kell?",
answers:[
{text:"Igen",points:{Momentum:2,DK:2,Tisza:2},axis:{econ:0,soc:-2}},
{text:"Nem",points:{Fidesz:2},axis:{econ:0,soc:2}}
]
},

{
q:"Támogatnád a digitális állam fejlesztését?",
answers:[
{text:"Igen",points:{Momentum:2,Tisza:2},axis:{econ:0,soc:-1}},
{text:"Nem",points:{},axis:{econ:0,soc:1}}
]
}

]
