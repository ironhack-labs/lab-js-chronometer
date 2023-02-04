class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime +=1
      //printTimeCallback();
    }, 1000);

  }

  getMinutes() {
    const minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    const seconds = this.currentTime % 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
   if(value < 10) return `0${value}`
   return value.toString();
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const splitSeconds = this.computeTwoDigitNumber(this.getSeconds());
    const splitminutes = this.computeTwoDigitNumber(this.getMinutes());
    return `${splitminutes}:${splitSeconds}`;
  }
}