class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    const intervalId = setInterval( () => {
      this.currentTime += 1;

      if(printTimeCallback) {
        printTimeCallback();
      }

    }, 1000);

    this.intervalId = intervalId;
  }

  getMinutes() {
    return Math.floor(this.currentTime/60)
  }

  getSeconds() {
    return this.currentTime%60;
  }

  computeTwoDigitNumber(value) {
    let string = "";
    if( value.toString().length === 1 ){
      string = '0' + value;
    } else {
      string = value.toString();
    }
    return string;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let min = this.computeTwoDigitNumber(this.getMinutes());
    let sec = this.computeTwoDigitNumber(this.getSeconds());
    return min + ":" + sec;
  }
}
