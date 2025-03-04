var timer = document.querySelector("h1");
var start = document.querySelector("#start");
var stp = document.querySelector("#stop");
var time;
var count=0;
start.addEventListener("click", function(){
    clearInterval(time);
    time = setInterval(function(){
        timer.textContent = count;
        count++;
    }, 1000);
})
stp.addEventListener("click", function(){
    clearInterval(time);
})
