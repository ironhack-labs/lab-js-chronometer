class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if(printTimeCallback) {
      printTimeCallback();
      }
    }, 10);
  }

  // centisegundos em minutos
  getMinutes() {
    let timeInMin = Math.floor(this.currentTime / 6000);
    return timeInMin;
  }

    // centisegundos em segundos
  getSeconds() {
    let timeInSec = Math.floor(this.currentTime / 100) % 60
    return timeInSec;
  }

  // centisegundos em centisegundos
  getCentiseconds() {
    let timeInSec = Math.floor(this.currentTime % 100)
    return timeInSec;
  }

  computeTwoDigitNumber(value) {
    if(value < 10) return `0${value}`
    else return `${value}`
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}.${this.computeTwoDigitNumber(this.getCentiseconds())}` 
  }
}