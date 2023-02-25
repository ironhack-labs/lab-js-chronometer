class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    setTimeout(()=>{
      this.currentTime += 1;
    },1000)

    // setInterval(()=>{
    //   this.printTimeCallback
    // },1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    if (value >= 10) {
      return value.toString();
    } else {
      return "0" + value;
    }
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
