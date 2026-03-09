function generateShareImage(result){

const canvas=document.createElement("canvas")
canvas.width=1200
canvas.height=630

const ctx=canvas.getContext("2d")

ctx.fillStyle="#2563eb"
ctx.fillRect(0,0,1200,630)

ctx.fillStyle="white"
ctx.font="bold 70px sans-serif"
ctx.fillText("Választási iránytű",120,200)

ctx.font="50px sans-serif"
ctx.fillText("Nekem ez jött ki:",120,350)

ctx.font="bold 80px sans-serif"
ctx.fillText(result,120,470)

return canvas.toDataURL()
}
