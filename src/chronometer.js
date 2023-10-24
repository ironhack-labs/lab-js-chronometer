class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback) printTimeCallback()
    }, 1000);
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    let seconds = this.currentTime % 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    if (value <= 9) { return (("0" + value).slice(-2)) }
    else { return `${value}` }
  }

  stop() {
    clearInterval(this.intervalId);
  }


  reset() {
    this.currentTime = 0;
  }

  split() {
    let mm = (`${computeTwoDigitNumber(getMinutes)}`);
    let ss = (`${computeTwoDigitNumber(getSeconds)}`);
    return (mm + ":" + ss)

  }
}


// let splitTime = (`${computeTwoDigitNumber(minutes)}:${computeTwoDigitNumber(seconds)}`)
//return splitTime;