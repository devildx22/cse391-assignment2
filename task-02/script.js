let time = 0; 
let timerInterval = null; 

const timeDisplay = document.getElementById("time-display");
const btnStart = document.getElementById("btn-start");
const btnStop = document.getElementById("btn-stop");
const btnReset = document.getElementById("btn-reset");

// Start Button Logic
btnStart.addEventListener("click", function() {
    if (timerInterval !== null) return; 

    // Stop exactly at 30 seconds[cite: 2]
    if (time < 30) {
        timerInterval = setInterval(function() {
            time += 3; // Count in multiples of 3[cite: 2]
            timeDisplay.innerText = time;

            if (time >= 30) {
                clearInterval(timerInterval); 
                timerInterval = null;
            }
        }, 3000); // If it's 1000 then it will Triggers every 1 second in real time
    }
});

// Stop Button Logic
btnStop.addEventListener("click", function() {
    clearInterval(timerInterval); 
    timerInterval = null; 
});

// Reset Button Logic
btnReset.addEventListener("click", function() {
    clearInterval(timerInterval); 
    timerInterval = null;
    time = 0; 
    timeDisplay.innerText = time; 
});