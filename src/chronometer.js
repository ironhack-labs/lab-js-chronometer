class Chronometer {
  constructor() {
    }
   currentTime = 0
    intervalId = null


  start(printTimeCallback){
    let currentTime = 0;

function start(printTimeCallback) {
  let currentTime = 0;

function start(printTimeCallback) {
    currentTime = 0;
    let iidInterval = setInterval(() => {
        currentTime++;
        printTimeCallback(currentTime);
    }, 3000);
}
}
  }

  getMinutes() {
   return Number(Math.ceil(this.currentTime/1000))
  }

  getSeconds() {
    return Math.floor((this.currentTime % 1000))
  }

  computeTwoDigitNumber(value) {
      let Value = value.toString();
      if (Value.length === 1) {
          Value = "0" + Value;
      }
      return Value;
  }

      

  stop() {
    clearInterval(this.intervalId)
  }
  reset() {
    
      this.currentTime = 0}
    

  split() 
  {
    function getTimeFormat(totalSeconds) {
      let minutes = Math.floor(totalSeconds / 60);
      let seconds = totalSeconds % 60;
      let minutesString = computeTwoDigitNumber(minutes);
      let secondsString = computeTwoDigitNumber(seconds);
      let time = minutesString + ":" + secondsString;
      return time;
  }
  console.log(getTimeFormat(60));
  }  
}