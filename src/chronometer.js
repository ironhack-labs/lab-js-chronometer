class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }
      , 1000);

  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }


  computeTwoDigitNumber(value) {
    if (value.toString().length === 1) {
      return '0' + value;
    } else {
      return value.toString();
    }
  }
  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let str = '';
    str += this.computeTwoDigitNumber(this.getMinutes());
    str += ':';
    str += this.computeTwoDigitNumber(this.getSeconds());

    return str;
  }
}

