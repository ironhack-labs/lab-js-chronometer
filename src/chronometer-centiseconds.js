class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
    
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      if (printTimeCallback) {
        printTimeCallback();
      }
      // printTimeCallback && printTimeCallback()
      this.currentTime++;
    },10)
  }

  getMinutes() {
    return Math.floor((this.currentTime/100) / 60)
  }

  getSeconds() {
    return Math.floor((this.currentTime/100) % 60);
  }

  getCentiseconds() {
    return (this.currentTime % 100)
  }

  computeTwoDigitNumber(value) {
    return value.toString().padStart(2,'0')
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
    let centiSeconds = this.computeTwoDigitNumber(this.getCentiseconds());

    return `${minutes}:${seconds}.${centiSeconds}`;
  }
}
