let dice1= document.querySelector(".dice1 .img1");
let dice2= document.querySelector(".dice2 .img2");
let click = document.querySelector(".click");
let result=document.querySelector(".result");
click.addEventListener('click',function(){
    let randOne= Math.floor(Math.random()*6+1);
    dice1.setAttribute("src","images/dice"+randOne+".png");
    let randTwo= Math.floor(Math.random()*6+1);
    dice2.setAttribute("src","images/dice"+randTwo+".png");
    if(randOne>randTwo){
        result.innerHTML="Player One won!";
    }else if(randTwo>randOne){
        result.innerHTML="Player two won!";
    }else if(randOne==randTwo){
        result.innerHTML="Draw! click again!";
    }
})