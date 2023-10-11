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
    }, 1000)
    //debe invocar el argumento pasado (printTimeCallback) cada 1 segundo
    //debe incrementar la propiedad currentTime a 3 después de 3 segundos

  }

  getMinutes() {
    const minutes = Math.floor(this.currentTime / 60);
    return minutes
  }

  getSeconds() {
    const seconds = this.currentTime % 60;
    return seconds
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0${value}`;
      //Para poner los dos numeros digitales, devolverlo como valor de un string
    }
    //y en el caso de ser mayor de 10, no sería necesario
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
