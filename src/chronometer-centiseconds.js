class Chronometer {
  constructor() {
    // DONE
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    //  DONE
    const initialiseTimer = setInterval(() => {
      this.currentTime++;
      if (typeof printTimeCallback === 'function') {
        printTimeCallback();
      }
    }, 10);
    this.intervalId = initialiseTimer;
  }

  getMinutes() {
    //  DONE
    return Math.floor(this.currentTime / (60 * 100));
  }

  getSeconds() {
    // DONE
    return Math.floor((this.currentTime * 0.01) % 60);
  }

  getCentiseconds() {
    // DONE
    return Math.floor(this.currentTime % 100);
  }

  computeTwoDigitNumber(value) {
    // DONE - tough one! Might need advise on better coding practice
    let addZero = '';
    if (typeof value != 'number') {
      if (value.length === 1 && value.length <= 2) {
        addZero = '0' + value;
      } else {
        addZero = value;
      }
    } else {
      // number, convert to string
      let strValue = value.toLocaleString();
      if (strValue.length === 1 && strValue.length <= 1) {
        addZero = '0' + strValue;
      } else {
        addZero = strValue;
      }
    }
    return addZero;
  }

  stop() {
    //  DONE
    clearInterval(this.intervalId);
  }

  reset() {
    //  DONE
    return (this.currentTime = 0);
  }

  split() {
    // DONE
    let theMinutes = this.computeTwoDigitNumber(Math.floor(this.currentTime / (60 * 100)));
    let theSeconds = this.computeTwoDigitNumber(Math.floor((this.currentTime * 0.01) % 60));
    let theCentiseconds = this.computeTwoDigitNumber(Math.floor(this.currentTime % 100));
    return `${theMinutes}:${theSeconds}.${theCentiseconds}`;
  }
}
