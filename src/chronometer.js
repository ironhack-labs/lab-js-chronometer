class Chronometer {
  constructor() {
   this.currentTime = 0;
   this.intervalId = null; 
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000, );
  }

  getMinutes() {
   return Math.floor(this.currentTime / 60); 
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    let valueString = String(value);
    return valueString.length === 1 ? "0" + valueString : valueString.slice(0,2);
  }

  stop() {
   clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0; 
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    console.log(this.getMinutes, seconds);
    return `${minutes}:${seconds}`;
  }
}
