class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (!printTimeCallback) return 0;
      printTimeCallback();
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60 / 100);
  }

  getSeconds() {
    return Math.floor((this.currentTime / 100) % 60);
  }

  getCentiseconds() {
    return Math.floor(this.currentTime % 100);
  }

  computeTwoDigitNumber(value) {
    /*  Option 1 */

    if (value.toString().length == 1) {
      return "0" + value;
    } else {
      return value.toString();
    }

    /*  Option 2
    let valueString = value.toString();

    if (valueString.slice(1) == 0) {
      return "0" + valueString;
    } else {
      return valueString;
    } */

    /* Option 3 

    if (value < 10) {
      return "0" + value;
    } else return value.toString();
    */
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const splitTimeMin = this.computeTwoDigitNumber(this.getMinutes());
    const splitTimeSec = this.computeTwoDigitNumber(this.getSeconds());
    const splitTimeCent = this.computeTwoDigitNumber(this.getCentiseconds());
    // return `${splitTimeMin.toString()}:${splitTimeSec.toString()}.${splitTimeCent.toString()}`;
    return splitTimeMin + ":" + splitTimeSec + "." + splitTimeCent;
  }
}
