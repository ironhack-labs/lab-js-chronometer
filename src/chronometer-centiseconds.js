class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1
      if (printTimeCallback){
        printTimeCallback()
      }else {}
    },10)
  }

  //   setTimeout(() => {
  //     setInterval(() => {
  //       this.currentTime += 200
  //     }, 2000)
  // })

  getMinutes() {
    // ... your code goes here
  }

  getSeconds() {
    // ... your code goes here
  }

  getCentiseconds() {
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
