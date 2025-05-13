class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) printTimeCallback();
    }, 10);

    return printTimeCallback;
  }

  getMinutes() {
     return Math.floor(this.currentTime / 6000); 
  }

  getSeconds() {
    return Math.floor((this.currentTime / 100) % 60)
  }

  getCentiseconds() {
     return Math.floor(this.currentTime % 100) 
  }

  computeTwoDigitNumber(value) {
    const newValue = value.toString();

    if (newValue.length < 9 || newValue.length >= 0) {
      let padTime = "0" + newValue;
      return padTime.slice(-2);
    }

    return newValue;
  }

  stop() {
    return clearInterval(this.intervalId)
  }

  reset() {
    return this.currentTime = 0
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}.${this.computeTwoDigitNumber(this.getCentiseconds())}`;

  
}
}