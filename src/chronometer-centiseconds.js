class Chronometer {
  constructor() {

    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    //debe incrementar en 1 la propiedad currentTime cada intervalo de 1 segundo
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 10)
    //debe invocar el argumento pasado (printTimeCallback) cada 1 segundo
    //debe incrementar la propiedad currentTime a 3 después de 3 segundos

  }
  getCentiseconds() {
    // ... your code goes here
  }

  getMinutes() {
    const minutes = Math.floor(this.currentTime / 6000);
    return minutes
  }

  getSeconds() {
    const seconds = (this.currentTime / 100) % 60;
    return seconds
  }

  getCentiseconds() {
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`
  }

  stop() {
    clearInterval(this.currentTime);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const seconds = this.computeTwoDigitNumber(this.getSeconds())
    const minutes = this.computeTwoDigitNumber(this.getMinutes())
    return `${minutes}:${seconds}`
  }
}
