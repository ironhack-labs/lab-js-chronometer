class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(
      () => {
        this.currentTime++;
        if (printTimeCallback) printTimeCallback();
      },
      1000
    )
  }

  getMinutes() {
    return Math.floor( this.currentTime / 60 );
  }

  getSeconds() {
    return this.currentTime%60;
  }

  computeTwoDigitNumber(value) {
    return ("0" + value).slice(-2);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return this.computeTwoDigitNumber( this.getMinutes() ) + ":" + this.computeTwoDigitNumber( this.getSeconds() );
  }
}
