class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(()=>{
      if(printTimeCallback){
        printTimeCallback();
      }
      this.currentTime++;
    }, 1000)
  }

  getMinutes() {
    // ... your code goes here
   let minutesPassed = Math.floor(this.currentTime/60)
  
  return minutesPassed
  
  }

  getSeconds() {
    // ... your code goes here
    let secondsPassed = this.currentTime % 60

    return secondsPassed
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    const number = parseInt.value
    if(value<10){
      return `0${value}`
    }
    else{
      return `${value}`
    }

  }

  stop() {
    // ... your code goes here
    
      clearInterval(this.intervalId);
}

  reset() {
    // ... your code goes here
    this.currentTime = 0

  }

  split() {
    // ... your code goes here
  }
}
