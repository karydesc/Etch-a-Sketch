let bcolor='white'
let dcolor='black'
const board=document.querySelector(".board");
const colorselec=document.querySelector(".color");
const dimselect=document.querySelector(".text");
const whiteb=document.querySelector(".white");
const blackb=document.querySelector(".black");
const resetb=document.querySelector(".reset")

whiteb.onclick=() =>{
    dcolor='white'
}
blackb.onclick=() =>{
    dcolor='black'
}
resetb.onclick=reset()





function updateBackground(inp){
    const all = document.querySelectorAll(".boarddiv");
    all.forEach(x => {
        x.style.background= `${inp}`;
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
    this.style.background=`${dcolor}`;
}
function reset(){
    console.log("entered")
    const all = document.querySelectorAll(".boarddiv");
    all.forEach(x =>{
        x.style.background=`${bcolor}`
    })
}
updateGrid(16);
updateBackground('white');

