var b = 0;
var valScore =0;
function randomNumber(){
var bubble = "";
for(var i = 1; i<150; i++){
    var a = Math.floor(Math.random()*10);
    bubble += `<div class="bubble">${a}</div>`
}
document.querySelector("#bottomPanel").innerHTML = bubble;
}
function timer(){
    var time = 60;
    var ainterval = setInterval(function() {
      if(time > 0){
        time--;
        document.querySelector("#timerSet").textContent = time;
      }
      else {
        document.querySelector("#bottomPanel").innerHTML = `<p> Your Score: ${valScore} <br> Reload to Play Again!<p>`;
         clearInterval(ainterval);
      }
    },1000);
}
function hit(){
    b = Math.floor(Math.random()*10);
    document.querySelector("#hitting").textContent = b;
}
function score(){
    valScore +=10;
    document.querySelector("#scoreHit").textContent = valScore;

}
document.querySelector("#bottomPanel").addEventListener("click",function(details){
    var clickedNum = Number(details.target.textContent);
    if(b == clickedNum){
        score();
        hit();
        randomNumber();
    }
});

randomNumber();
timer();
hit();