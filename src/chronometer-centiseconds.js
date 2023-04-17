class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
    },10)  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    return Math.floor((this.currentTime / 100) % 60);
  }

  getCentiseconds() {
    return Math.floor(this.currentTime % 100);
  }

  computeTwoDigitNumber(value) {
    if(value <= 9) {
      return `0${value}`;
    } else if (value > 9) {
      return `${value}`;
    }

  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    return this.currentTime = 0;
  }

  split() {
    let minutes =this.computeTwoDigitNumber(this.getMinutes());
    let seconds =this.computeTwoDigitNumber(this.getSeconds());
    let centiSeconds = this.computeTwoDigitNumber(this.getCentiseconds())
    return `${minutes}:${seconds}.${centiSeconds}`;  
  }
}
