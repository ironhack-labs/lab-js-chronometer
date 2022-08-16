class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;

      if (printTimeCallback) { //No comprendo bien por qué hay que hacer esto para que Jasmine me acepte la condición.
        printTimeCallback();
      }

    }, 1000);
  }

  getMinutes() {
    const minutes = this.currentTime / 60
    return Math.floor(minutes)
  }

  getSeconds() {
    const seconds = this.currentTime % 60
    return Math.floor(seconds)
  }

  computeTwoDigitNumber(value) {
    let numberToString = value.toString()
    if (numberToString.length === 1) {
      return "0" + numberToString; // Al ser un return no hace falta un else, porque no sigue bajando si la condición se da.
    }
    return numberToString
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let formatedMinutes = this.computeTwoDigitNumber(this.getMinutes())
    let formatedSeconds = this.computeTwoDigitNumber(this.getSeconds())
    let formatedTime = `${formatedMinutes}:${formatedSeconds}`
    return formatedTime
  }
}
