class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    // ... your code goes here
  }

  start(printTimeCallback) {
    if (this.intervalId === null) {
      this.intervalId = setInterval(() => {
        this.currentTime++;
        // this.currentTime + 1;
        // printTimeCallback(this.currentTime);
        // if (this.currentTime === 3) {
        //   clearInterval(this.intervalId);
        // }
        if (printTimeCallback) {
          printTimeCallback();
        }
      }, 1000);
    }
  }

  getMinutes() {
    // let time = this.currentTime;
    // return Math.floor(time / 60);
    if (this.currentTime == 0) {
      return 0;
    }
    let calculate = Math.floor(this.currentTime / 60);
    return calculate;
  }

  getSeconds() {
    // ... your code goes here
    if (this.currentTime === 0) {
      return 0;
    }
    let seconds = this.currentTime;
    //return seconds;
    let remaining = this.currentTime % 60;
    return remaining;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value == 0) {
      return "00";
    } else if (value < 10) return "0" + value;
    else if (value > 9) {
      return value.toString();
    }
  }

  stop() {
    clearInterval(this.intervalId);
    // ... your code goes here
  }

  reset() {
    this.currentTime = 0;
    // ... your code goes here
  }

  split() {
    // ... your code goes here
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}
