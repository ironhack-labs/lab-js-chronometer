class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }


  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) printTimeCallback();
    }, 1000);
  }
  
    
    getMinutes() {
      // ... your code goes here
  if (!this.currentTime) {
    return 0;
  } else {
    let minutesPassed = Math.floor(this.currentTime / 60);
    return minutesPassed;
  }
}

  getSeconds() {
    // ... your code goes here
    
      if (!this.currentTime) {
        return 0;
      } else {
        let secondsPassed = this.currentTime % 60;
        return secondsPassed;
      }
    }
  

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value === 0) {
      return '00'; 
    } else if (value < 10) {
      return '0' + value.toString();
    } else return value.toString();
    
    // Handle any other cases or conditions here if needed
    
  }
  

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());

    return `${minutes}:${seconds}`;
  }
}
