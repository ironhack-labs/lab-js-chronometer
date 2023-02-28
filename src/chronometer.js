class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (typeof printTimeCallback === 'function') {
        printTimeCallback();
      }
    }, 1 * 1000);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    /////////////////////////////////////////////////////////
    ////with if                                         ////
    ///////////////////////////////////////////////////////
    /*let text
    if (value < 10) {
      text = "0" + value.toString();
    } else {
      text = value.toString();
    }
    return text;*/

    /////////////////////////////////////////////////////////
    ////with split                                      ////
    ///////////////////////////////////////////////////////
    const valueArray = value.toString().split('');
    valueArray.unshift('0');
    return valueArray[valueArray.length - 2] + valueArray[valueArray.length - 1]
  }

  stop() {
    // ... your code goes here
    clearInterval (this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}
