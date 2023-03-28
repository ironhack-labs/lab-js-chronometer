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
      10
    )
  }

  getMinutes() {
    return Math.floor( this.currentTime / 6000 );
  }

  getSeconds() {
    return Math.floor( this.currentTime / 100 )%60;
  }

  getCentiseconds() {
    return this.currentTime%100;
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
    const mm = this.computeTwoDigitNumber( this.getMinutes() );
    const ss = this.computeTwoDigitNumber( this.getSeconds() );
    const SS = this.computeTwoDigitNumber( this.getCentiseconds() );

    return `${mm}:${ss}.${SS}`
  }
}
