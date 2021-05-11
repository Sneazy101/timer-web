let stop, time;

const clock = document.getElementById("clock");
const millDisplay = document.getElementById("millisecond");
const start_button = document.getElementById("start");
const stop_button = document.getElementById("stop");
const pause_button = document.getElementById("pause");

let displayTime;
let continuationTime;

function startTimer(){
  let d = new Date;
  if(!stop){
    const displayTime = d.getTime() - time;
    setTimeout(function(){
        continuationTime = displayTime;
        setTimer(displayTime);
        startTimer();
    },49);
  }
}

function setTimer(displayTime){
  let s = Math.floor(displayTime/1000);
  let m = Math.floor(s/60);
  let h = convert2DoubleDigit(Math.floor(m/60));
  let sd = convert2DoubleDigit(s%60);
  let md = convert2DoubleDigit(m%60);
  let ms = displayTime%1000;
  clock.innerHTML = h +":"+md+":"+sd;
  millDisplay.innerHTML = ""+ms;
}

function convert2DoubleDigit(val){
  if(val < 10){
    val = "0" + val;
  }
  return val;
}

function main(){
  start_button.addEventListener('click', function(){
    stop = false;
    time = new Date();
    if(continuationTime == null){
      continuationTime = 0;
    }
    time -= continuationTime;
    startTimer();
  })

  stop_button.addEventListener('click', function(){
    stop = true;
    displayTime = 0;
    continuationTime = 0;
  })

  pause_button.addEventListener('click', function(){
    stop = true;
  })
}

main();