class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null


  }

  start(printTimeCallback) {


    const intervalId = setInterval(() => {

      this.currentTime++

      if (printTimeCallback) {
        printTimeCallback()
      }

    }, 1000)
    
  }

  getMinutes() {

  }

  getSeconds() {
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
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
