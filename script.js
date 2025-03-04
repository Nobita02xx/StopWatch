var timer = document.querySelector("h1");
var start = document.querySelector("#start");
var stp = document.querySelector("#stop");
var time;
start.addEventListener("click", function(){
    var count=0;
    time = setInterval(function(){
        timer.textContent = count;
        count++;
    }, 1000);
})
stp.addEventListener("click", function(){
    clearInterval(time);
})