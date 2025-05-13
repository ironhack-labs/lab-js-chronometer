class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) printTimeCallback();
    }, 1000);

    return printTimeCallback;
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }
  computeTwoDigitNumber(value) {
    // const newValue = value.toString();

    // if (newValue.length < 9 || newValue.length >= 0) {
    //   let padTime = "0" + newValue;
    //   return padTime.slice(-2);
    // }

    // return newValue;

     if (value >= 0 || value <= 9){
      const padTime = ('0' + value)
      return padTime.slice(-2).toString()
     }
     const result = value.toString();

     return result;
  }

  stop() {
    return clearInterval(this.intervalId)
  }

  reset() {
    return this.currentTime = 0
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}
