let block = document.getElementById("block");
let hole = document.getElementById("hole");
let character = document.getElementById("character");

hole.addEventListener('animationiteration',()=>{
    let random = -(Math.random()*40+5);
    hole.style.top = random+"rem";
})


let charTop = 10;
let isJumping = false;
let vel = (charTop/10);
setInterval(()=>{
    if(isJumping===false){
        charTop+=0.15*vel;
        vel+=0.01; 
        if(charTop>38){
            charTop=38;
        }
        character.style.top  =  charTop+"rem";      
        
    }
},5)
 

document.addEventListener('click',(event)=>{
    jump();
    }
);

document.addEventListener('keydown',(event)=>{
    jump();
})


function jump(){
    let jumpSize = 30;
    let jumpPace=.1;
    isJumping=true;
    let i = 0;
    
    let jumpInterval = setInterval(()=>{
        if(i>=jumpSize){
            clearInterval(jumpInterval);
        }

        if( charTop>0){
            charTop-=jumpPace;
            character.style.top  =  charTop+"rem";

        }
        
        i++;
        isJumping=false;
        vel=0;
    },1);
}