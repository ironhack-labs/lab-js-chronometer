class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    printTimeCallback = () => this.currentTime++;
    this.intervalId = setInterval(() => printTimeCallback(), 1000)
    // why does should invoke the passed argument every one second work if I remove the this 
  }

  getMinutes() {
   return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
    if (value >= 10) return value.toString();
    if (value < 10) return "0" + value.toString();
    if (value == 0) return value.toString() + "0";
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    return this.currentTime = 0;
  }

  split() {
   
  }
}
