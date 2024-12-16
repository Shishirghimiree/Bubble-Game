function makeBubble(){
    var clutter = "";
for(var i = 1;i<=207;i++){
    var randomNumber=Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${randomNumber}</div>`;
}
document.querySelector("#pbtn").innerHTML = clutter;
}

var timer=60;
function runTimer(){
    var timerCount = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerVal").innerHTML= timer;
        }else{
            clearInterval(timerCount);
        }
    },1000);
}
runTimer();
makeBubble();