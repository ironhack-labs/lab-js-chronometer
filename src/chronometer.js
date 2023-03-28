class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId =  null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() =>{
      this.currentTime++;
      if(printTimeCallback){
      printTimeCallback()}
    }, 1000);

  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    value = value.toString()
    return value.length

  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
