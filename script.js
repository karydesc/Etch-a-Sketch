let bcolor='white'
let dcolor='black'
let enable=false;
const board=document.querySelector(".board");
const colorselec=document.querySelector(".color");
const dimselect=document.querySelector(".text");
const dcolorselect=document.querySelector("#draw");
const whiteb=document.querySelector(".white");
const blackb=document.querySelector(".black");
const resetb=document.querySelector(".reset")

whiteb.onclick=() =>{
    dcolor='white'
}
blackb.onclick=() =>{
    dcolor='black'
}
resetb.onclick=()=>{
    reset();
}
colorselec.addEventListener("change",x =>{
    bcolor=x.target.value;
    updateBackground(bcolor)
})
dimselect.addEventListener("change",x=>{
    updateGrid(x.target.value);
    updateBackground(bcolor)
})
dcolorselect.addEventListener("change",x=>{
    dcolor=x.target.value;
})
document.addEventListener("mousedown",x=>{
    
    enable=true;
    
})
document.addEventListener("mouseup",x=>{
    enable=false;
})


function updateBackground(inp){
    
    const all = document.querySelectorAll(".boarddiv");
    all.forEach(x => {
        if (x.marked!=1){
        x.style.background= `${inp}`;}
    } )
}
function updateGrid(inp){
    board.innerHTML="";
    board.style.gridTemplateColumns=`repeat(${inp},1fr)`
    board.style.gridTemplateRows=`repeat(${inp},1fr)`
    for (let i=0;i<inp*inp;i++){
        let elem = document.createElement('div')
        elem.className="boarddiv";
        elem.addEventListener("mouseover",draw);
        board.insertAdjacentElement('beforeend',elem);

    }
}
function draw(){
    if (enable==true)
    {this.style.background=`${dcolor}`;
    this["marked"]=1}
}
function reset(){
    const all = document.querySelectorAll(".boarddiv");
    all.forEach(x =>{
        x.marked=0
        x.style.background=`${bcolor}`
    })
}
updateGrid(16);
updateBackground('white');


