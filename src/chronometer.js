class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
    },1000);
  }

  getMinutes() {
    // ... your code goes here
    let count = this.currentTime / 60;
    let minuteCount = Math.floor(count)
    
    return minuteCount;
  }

  getSeconds() {
    // ... your code goes here
    let getSeconds = this.currentTime % 60;
    return getSeconds;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let result = value.toString()

    if(result.length < 2){
      result = "0" + result.slice(0, 1)
    }    
      return result;
  }

  stop() {
    // ... your code goes here
    clearInterval.Interval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    let secondeSplit = this.getSeconds()
    let secondeString = secondeSplit.toString()
    let moniteSplit = this.getMinutes()
    let minuteString = minuteSplit.toString()

    if(secondeString.length < 2){
      secondeString = "0" + secondeString.slice(0, 1)
    }
    if(minuteString.length < 2){
      minuteString = "0" + minuteString.slice(0, 1)
    }
    return `${minuteString}: ${secondeString}`
  }
}
