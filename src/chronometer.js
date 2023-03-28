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
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
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
    //return `${splitTimeMin.toString()} : ${splitTimeSec.toString()}`;
    return splitTimeMin + ":" + splitTimeSec;
  }
}
