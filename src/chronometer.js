class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }
  //increment the currentTime property by 1 every 1 second



  start(printTimeCallback) {


    this.intervalId = setInterval(() => {
      if (typeof printTimeCallback === 'function') {
        printTimeCallback();
      }
      this.currentTime += 1;
    }, 1000)




  }

  getMinutes() {
    const seconds = this.currentTime;
    const minutes = Math.floor(seconds / 60);
    return minutes;

  }

  getSeconds() {
    const seconds = this.currentTime
    return seconds % 60


  }

  computeTwoDigitNumber(value) {
    const twoDigitNumber = value.toString().padStart(2, "0");
    return twoDigitNumber;
  }

  stop() {

    clearInterval(this.intervalId)



  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}
