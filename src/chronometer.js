class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(()=>{
      if (printTimeCallback) {
        printTimeCallback();
      }
      this.currentTime++;
    }, 1000)
 
  }  

  getMinutes() {
    let numberOfMinutes =Math.floor(this.currentTime/60);
    return numberOfMinutes;
  }

  getSeconds() {

    let numberOfSeconds = this.currentTime % 60;
    return numberOfSeconds;
  }

  computeTwoDigitNumber(value) {
    const number = parseInt(value);
    if (number<10) {
      return `0${number}`;
    }
    else {
      return `${number}`;
    }
  }

  stop() {
      clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());

    return `${minutes}:${seconds}`;
    
  }
}

