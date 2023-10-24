class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    setInterval((intervalId) => {     
      this.currentTime++;
    }, 1000);
    setInterval(function () {
      if (printTimeCallback) {
        return printTimeCallback();
      }
      else {
        return 0;
      }
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    const totalMinutes = Math.floor(this.currentTime / 60);
    return totalMinutes;
  }

  getSeconds() {
    // ... your code goes here
    let totalSeconds = this.currentTime;
    let secondsOnly = totalSeconds % 60;
    return totalSeconds;
/*
    let decimalPoint = minutesAndSeconds.toString().indexOf('.');
    let afterDecimal = minutesAndSeconds.toString().substring(decimalPoint + 1);
    let secondsOnly = Math.floor(afterDecimal);
    return secondsOnly;
*/
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let digitalDisplay = value.toString();
    
    if (digitalDisplay === 0 || digitalDisplay <= 9) {
      return '0' + digitalDisplay;
    }
    else {
      return digitalDisplay;
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    const reset = 0;
    this.currentTime = reset;
    return this.currentTime;
  }

  split() {
    // ... your code goes here'
    let splitTime = this.currentTime;
    let minSec = splitTime / 60;
    let fixedForm = minSec.toFixed(2);

    let decPoint = fixedForm.toString().indexOf('.');
    let afterDec = fixedForm.toString().substring(decPoint + 1);
    let secsOnly = Math.floor(afterDec);

    let minsOnly = minSec.slice(0, 1);

    if (minsOnly === 0 || minsOnly <= 9) {
      let minsSingleFormat = '0' + minsOnly;
    }
    else {
      let minsDoubleFormat = minsOnly;
    }

    if (secsOnly === 0 || secsOnly <= 9) {
      let secsSingleFormat = '0' + secsOnly;
    }
    else {
      let secsDoubleFormat = secsOnly;
    }

    if (minsSingleFormat && secsSingleFormat) {
      return minsSingleFormat + ':' + secsSingleFormat;
    }
    if (minsDoubleFormat && secsSingleFormat) {
      return minsDoubleFormat + ':' + secsSingleFormat;
    }
    if (minsSingleFormat && secsDoubleFormat) {
      return minsSingleFormat + ':' + secsDoubleFormat;
    }
    if (minsDoubleFormat && secsDoubleFormat) {
      return minsDoubleFormat + ':' + secsDoubleFormat;
    }
  }
}
