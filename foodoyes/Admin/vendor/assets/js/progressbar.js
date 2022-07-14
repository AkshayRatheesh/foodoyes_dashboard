const secondsToCount = 60 * 1;
let timer = secondsToCount,
    mins = 0,
    secs = 0;

const timerDisplay = document.querySelector('#timer');
const bar = document.querySelector('#barContainer #bar');
const textready = document.querySelector('#loading');

const updateTime = function() {
  
  mins = Math.floor(timer / 60);
  secs = timer % 60;
  
  if(secs < 10) {
    secs = '0' + secs;
  }
  
  timerDisplay.textContent = "("+ mins + ':' + secs + ")";
  let percent = (((secondsToCount - timer) / secondsToCount) * 100);
  
  if(percent < 3) {
    percent = 3;
  }
  
  bar.style.width = percent + '%';
  
  if(timer >= 1) {
    timer--;
  }
};

setInterval(updateTime, 1000);

updateTime();