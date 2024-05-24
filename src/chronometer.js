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
      if (printTimeCallback) {
        printTimeCallback();
      }
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
    let result = value.toString();
    if (result.length < 2) {
      result = "0" + result.slice(0, 1);
    }
    return result;
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
    let minute = this.getMinutes()
    let minuteString = minute.toString()

    let seconds = this.getSeconds()
    let secondsString = seconds.toString()

    if(minuteString.length < 2){
      minuteString = "0" + minuteString.slice(0,1)
    }
    
    if(secondsString.length < 2){
      secondsString = "0" + secondsString.slice(0,1)
    }
    

    return `${minuteString}:${secondsString}`
  }
}
