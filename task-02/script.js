let time = 0; 
let timerInterval = null; 

const timeDisplay = document.getElementById("time-display");
const btnStart = document.getElementById("btn-start");
const btnStop = document.getElementById("btn-stop");
const btnReset = document.getElementById("btn-reset");

btnStart.addEventListener("click", function() {
    if (timerInterval !== null) return; 

    if (time < 30) {
        timerInterval = setInterval(function() {
            time += 3; 
            timeDisplay.innerText = time;

            if (time >= 30) {
                clearInterval(timerInterval); 
                timerInterval = null;
            }
        }, 3000); // If it's 1000 then it will Triggers every 1 second in real time
    }
});

btnStop.addEventListener("click", function() {
    clearInterval(timerInterval); 
    timerInterval = null; 
});

btnReset.addEventListener("click", function() {
    clearInterval(timerInterval); 
    timerInterval = null;
    time = 0; 
    timeDisplay.innerText = time; 
});