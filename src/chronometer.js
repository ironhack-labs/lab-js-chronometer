class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;

  }
  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (typeof printTimeCallback !== 'undefined') {
        printTimeCallback()
      }
    }, 1000);
  };

  // myChronometer.start(function(){console.log(myChronometer.split())})

  getMinutes() {
    return Math.floor(this.currentTime / 60);
    // ... your code goes here
  }

  getSeconds() {
    return this.currentTime % 60
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    return ("0" + value.toString()).slice(-2);
  }
  // ... your code goes here

  stop() {
    clearInterval(this.intervalId)
    // ... your code goes here
  }

  reset() {
    this.currentTime = 0;
    // ... your code goes here
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`;
    // ... your code goes here
  }

}

let myChronometer = new Chronometer();

myChronometer.start(function(){console.log(myChronometer.split())})