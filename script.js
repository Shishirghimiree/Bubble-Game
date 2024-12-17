var timer=60;
var score=0;
var hitRN;
function increaseScore(){
    score +=10;
    document.querySelector("#scoreVal").innerHTML=score;
}

function getNewHit(){
    hitRN=Math.floor(Math.random()*10);
    document.querySelector("#hitvalue").innerHTML=hitRN;
}

function makeBubble(){
    var clutter = "";
for(var i = 1;i<=207;i++){
    var randomNumber=Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${randomNumber}</div>`;
}
document.querySelector("#pbtn").innerHTML = clutter;
}

function runTimer(){
    var timerCount = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerVal").innerHTML= timer;
        }else{
            clearInterval(timerCount);
            document.querySelector("#pbtn").innerHTML='<h1 id="gameOver">Game Over</h1>';
        }
    },1000);
}

document.querySelector("#pbtn").addEventListener("click",function(details){
   var clickedNumber=Number(details.target.textContent);
   if(clickedNumber===hitRN){
    increaseScore();
    makeBubble();
    getNewHit();
   }
})

getNewHit();
runTimer();
makeBubble();