class Chronometer {
  constructor() {
    this.intervalID= null;
    this.currentTime= 0;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      
      if ( !printTimeCallback ) {
        this.currentTime++;
      } else {
        this.currentTime++;
        printTimeCallback();
      }

    }, 1000);
    
  }

  getMinutes() {
    return Math.floor(time / 100 / 60);
  }

  getSeconds() {
    return (this.currentTime / 100 /60);
  }

  computeTwoDigitNumber(value) {
    let numberString = value.toString();
    if (numberString.length === 1) {
      return '0${numberString}';
    } else {
      return '${numberString}';
    }
  }

  stop() {
    clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = this.getMinutes();
    let seconds = this.getSeconds();
    let stringMinutes = this.computeTwoDigitNumber(minutes);
    let stringSeconds = this.computeTwoDigitNumber(seconds);
    return `${stringMinutes}:${stringSeconds}`;
  }
}
