class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime ++;
      if(printTimeCallback) {
        printTimeCallback();
      }
    }, 10);  // 10 milisegundos = 1 centisegundo
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000);   // 1 minuto = 6000 centisegundos
  }

  getSeconds() {
    return Math.floor((this.currentTime / 100) % 60); // 1 segundo = 100 centisegundos
  }

  getCentiseconds() {
    return this.currentTime % 100;
  }

  computeTwoDigitNumber(value) {
    return value.toString().padStart(2, "0");
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    // let minutes = this.getMinutes();
    // let seconds = this.getSeconds();
    // let centiSeconds = this.getCentiseconds();

    // return ("0" + minutes.toString()).slice(-2) + ":" + ("0" + seconds.toString()).slice(-2) + "." + ("0" + centiSeconds.toString()).slice(-2);
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const centiseconds = this.computeTwoDigitNumber(this.getCentiseconds());

    return `${minutes}:${seconds}.${centiseconds}`;
  }
}
