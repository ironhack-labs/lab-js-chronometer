class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
  
    this.intervalId = setInterval(() => {
      if (printTimeCallback) { printTimeCallback() };
      this.currentTime++;
    },1000);
    }
  

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    let result = "";
    if (value < 10) {
      result = `0${value}`;
    } else {
      result = `${value}`;
    }
    return result;
    // ... your code goes here
  }


  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let mm = this.getMinutes();
    let ss = this.getSeconds();
    let time = this.computeTwoDigitNumber(mm) + ":" + this.computeTwoDigitNumber(ss);
    return time;
  }
}