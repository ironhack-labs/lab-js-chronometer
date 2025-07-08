class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here

    this.intervalId = setInterval(() => {
      this.currentTime += 1;

      if (typeof printTimeCallback === "function") {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here

    //return number of entire minutes(integer) passed
    //calculate the minutes that have passed
    //divide by 60 and use Math.floor()
    //should return 0 when chronometer hasn't been started
    let totalMinutes = 0;
    if (this.currentTime === 0) {
      return 0;
    } else {
      totalMinutes = Math.floor(this.currentTime / 60);
    }
    return totalMinutes;
  }

  getSeconds() {
    // ... your code goes here
    //use modulo operator (currentTime % 60)
    if (this.currentTime === 0) {
      return 0;
    } else {
      return this.currentTime % 60;
    }
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    //padding single numbers with 0
    // use .slice() method
    // eg when computeTwoDigitNumber is called with number 7 it should return a string "07"
    // with 36 it should return string "36"
    return ("0" + value).slice(-2);

    /*let newValue = value.toString(); 
    if (newValue.length === 1 ) {
      return "0"+ newValue
    } else {
      return newValue; 
    }*/
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    return this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    //return string with format "mm:ss"
    //it can use getMinutes, getSeconds, computeTwoDigitNumber
    let splitMinutes = this.getMinutes(this.currentTime);
    let splitSeconds = this.getSeconds(this.currentTime);
    let splitMinutesComputed = this.computeTwoDigitNumber(splitMinutes);
    let splitSecondsComputed = this.computeTwoDigitNumber(splitSeconds);
    return `${splitMinutesComputed}:${splitSecondsComputed}`
    
  }
  
}

