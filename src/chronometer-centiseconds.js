class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 10);
  }

  getCentiseconds() {
    const centiseconds = this.currentTime % 100;
    console.log("Centi: ", centiseconds);
    return centiseconds;
  }

  getSeconds() {
    const seconds = Math.floor((this.currentTime / 100) % 60);
    console.log("Seconds: ", seconds);
    return seconds;
  }

  getMinutes() {
    const minutes = Math.floor(this.currentTime / 6000);
    console.log("Minutes: ", minutes);
    return minutes;
  }

  computeTwoDigitNumber(value) {
    let twoDigitNumber = "";
    if (value.toString().length === 1) {
      twoDigitNumber = `0${value}`;
      return twoDigitNumber;
    }
    twoDigitNumber = `${value}`;
    return twoDigitNumber;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const centiseconds = this.computeTwoDigitNumber(this.getCentiseconds());
    return `${minutes}:${seconds}.${centiseconds}`;
  }
}