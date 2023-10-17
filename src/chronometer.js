class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }




  start(printTimeCallback) {
    if (printTimeCallback)  {
      this.intervalId = setInterval(() => {
      this.currentTime++

        printTimeCallback(this.currentTime)


    }, 1000)

    clearInterval

  }
 



  }
 

  getMinutes() {
   return 0
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
