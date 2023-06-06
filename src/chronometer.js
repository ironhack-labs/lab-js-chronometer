class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null
  }

  start(printTimeCallback) {
    // ... your code goes here


      this.intervalId = setInterval(() => {
        if (printTimeCallback !== undefined || printTimeCallback)
        {
        printTimeCallback() }

          this.currentTime++;
        }, 1000);
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
    let twoDigits = value.toString();

    if (value < 10) {
      twoDigits = "0" + twoDigits;
    }
    return twoDigits;
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    
  }
}
