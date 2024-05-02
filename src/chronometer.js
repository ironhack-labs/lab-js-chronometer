class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    const callback = () => {
        console.log(this.currentTime++);
        if (this.currentTime <= 3)
            setTimeout(callback, 1000);
        else
            printTimeCallback();
    };
    setTimeout(callback, 1000);
}

  getMinutes() {
    const totalMinutes = Math.floor(this.currentTime / 60);
    return totalMinutes;
    
  }

  getSeconds() {
    const secondsPassed = this.currentTime % 60;

    return secondsPassed; 
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    const stringValue = String(value);

    // Pad the string with a leading '0' if it's a single-digit number
    return stringValue.padStart(2, '0');
    // ... your code goes here
  }

  stop(chronometer) {
    
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
