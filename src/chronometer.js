class Chronometer {
  constructor() {
  this.currentTime = 0;
  this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
this.currentTime++;
if (printTimeCallback){
  printTimeCallback(this.currentTime);
}
}, 1000);
}

  getMinutes() {
let numberOfMins = this.currentTime / 60;
let roundedMins = Math.floor(numberOfMins);
    return(roundedMins);
}

  getSeconds() {
let numberOfSecs = this.currentTime % 60;
return numberOfSecs;
  }

  computeTwoDigitNumber(value) {
  let stringValue = String(value);
  if ( stringValue.length === 1) {
    return '0' + stringValue;
  } else {
    return stringValue;
  }
  }

  stop() {
clearInterval(this.intervalId);

  }

  reset() {
this.currentTime = 0; 
  }

  split() {
let minutes = this.getMinutes();
let seconds = this.getSeconds();
return(`${this.computeTwoDigitNumber(minutes)}:${this.computeTwoDigitNumber(seconds)}`);
  }
}
