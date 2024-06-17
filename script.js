console.log("Welcome to Tic Tac Toe")
let turn="X"
//function to change the turn
const changeTurn=()=>{
    return turn==="X"?"0":"X"
}
   
//Game Logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
   element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeTurn();
            checkWin();
            document.getElementsByClassName(info)[0].innerText="Turn for"
        }
    }
    )
}

)
