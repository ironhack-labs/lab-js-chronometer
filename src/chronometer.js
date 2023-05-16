class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime =  0;
    this.intervalId = null;
    // null should be blue 
  }

  start(printTimeCallback) {
    // ... your code goes here
    const intervalID = setInterval(() => {
      if (typeof printTimeCallback === "function") {
       printTimeCallback(); 
      }
      this.currentTime++;
  }, 1000);
  }

  getMinutes() {
    // ... your code goes here
   let numberOfMinutes = Math.floor(this.currentTime/60);
    return numberOfMinutes
  }

  getSeconds() {
    // ... your code goes here
    let numberOfSeconds = this.currentTime % 60;
    return numberOfSeconds
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here


    if (value < 10) {
    return "0" + value.toString()
      } else {
        return value.toString()
      }
      
    }
  

  stop() {
    // ... your code goes here
    clearInterval(this.currentTime);
  }

  reset() {
    // ... your code goes here
      this.currentTime = 0
  }
  
  split() {

    return `${this.computeTwoDigitNumber(this.getMinutes())}":"${this.computeTwoDigitNumber(this.getSeconds())}

  }
}