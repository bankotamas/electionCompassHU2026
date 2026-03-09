let scores={}
let winner=""

function calculate(){

scores={}
parties.forEach(p=>scores[p]=0)

let econ=0
let soc=0

questions.forEach((q,i)=>{

let selected=document.querySelector(`input[name=q${i}]:checked`)

if(!selected)return

let ans=q.answers[selected.value]

for(let p in ans.points){

scores[p]+=ans.points[p]

}

econ+=ans.axis.econ
soc+=ans.axis.soc

})

winner=Object.keys(scores)
.reduce((a,b)=>scores[a]>scores[b]?a:b)

document.getElementById("result").innerHTML=

"Hozzád legközelebb álló párt: "+winner

saveResult(winner)

drawChart()

drawCompass(econ,soc)

}
