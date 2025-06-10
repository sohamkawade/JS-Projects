const timer = document.getElementById("display-timer")
document.getElementById("btn1").addEventListener('click', startStopwatch);
document.getElementById("btn2").addEventListener('click', stopStopwatch);
document.getElementById("btn3").addEventListener('click', resetStopwatch); 

let minutes = 0, seconds = 0, milliseconds = 0;
let id = null;
let isRunning = false;

function startStopwatch() {
    if (!isRunning) {
        id = setInterval(() => {
            milliseconds++;
            if (milliseconds === 100) { 
                seconds++;
                milliseconds = 0;
            }
            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }
            updateDisplay();
        }, 10); 
        isRunning = true;
    }
}

function stopStopwatch() {
    if (isRunning) {
        clearInterval(id);
        isRunning = false;
    }
}

function resetStopwatch() {
    clearInterval(id);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
    isRunning = false;
}

function updateDisplay() {
    timer.textContent = `${padZero(minutes)}:${padZero(seconds)}.${padTwo(milliseconds)}`;
}

function padZero(time) {
    return time < 10 ? '0' + time : time;
}

function padTwo(time) {
    return time < 10 ? '0' + time : time;
}
