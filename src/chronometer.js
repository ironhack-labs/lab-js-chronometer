class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
     setInterval(() => {
      this.currentTime++;
      printTimeCallback;
    }, 1000);
  }

  getMinutes() {
    let mins = Math.floor(this.currentTime / 60);
    return mins;
  }

  getSeconds() {
    let secs = this.currentTime % 60;
    return secs;
  }

  computeTwoDigitNumber(value) {
    let string = value.toString();
    let finalstring;
    if (string.length === 1) {
      finalstring = `0${string}`;
    }
    if (string.length === 2) {
      finalstring = string;
    }
    return finalstring;
  }

  stop() {
   clearInterval()
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    this.getMinutes();
    this.getSeconds();
    return `${computeTwoDigitNumber(mins)}:${computeTwoDigitNumber(secs)}`

  }
}
