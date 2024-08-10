let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset_btn");
let newgmbtn= document.querySelector("#new-btn");
let msgContainer= document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true;
  
let win= [[0,1,2],
          [3,4,5],
          [6,7,8],
          [0,3,6],
          [1,4,7],
          [2,5,8],
          [0,4,8],
          [2,4,6]];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       
        if(turn0){
            box.innerText ="O";
            turn0=false;
        }
        else{
            box.innerText = "X";
            turn0=true;
        }
        box.disabled = true;

        checkwinner();
    });  
})
const disablebox= ()=>{
    for(let b of boxes){
        b.disabled=true;
    }
}

const enablebox = () =>{
    for(let b of boxes){
        b.disabled= false;
        b.innerText="";
    }    
}
const showwinner = (Winner) =>{
    msg.innerText=`Congratulations, Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disablebox();
 }

const checkwinner= ()=>{
    for( let pattern of win){
        
        
            let pos1val= boxes[pattern[0]].innerText;
            let pos2val= boxes[pattern[1]].innerText;
            let pos3val= boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                showwinner(pos1val);
            }
        }    
    }
}

const reset = ()=>{
turn0=true;
enablebox();
msgContainer.classList.add("hide");
}

newgmbtn.addEventListener("click",reset);
resetbtn.addEventListener("click",reset);