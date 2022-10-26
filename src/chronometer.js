class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null

  }

  start(printTimeCallback) {
    // ... your code goes here
    // Should invoke the passed argument(printTimeCallback) every 1 second

    this.intervalId = setInterval(() => {

      this.currentTime++

      if (printTimeCallback) printTimeCallback()

    }, 1000)

  }

  getMinutes() {
    // ... your code goes here

    return Math.floor(this.currentTime / 60)

  }

  getSeconds() {
    // ... your code goes here
    // work after

    return this.currentTime % 60

  }

  getCentiseconds() {



    return (this.currentTime / 0.01)


  }








  computeTwoDigitNumber(value) {
    // ... your code goes here
    //should return string
    const str = value.toString()

    if (str.length > 1) {

      return str

    } else {

      return '0' + str

    }

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
    // should return a string
    // should return a string showing "mm:ss" format

    const min = this.computeTwoDigitNumber(this.getMinutes())
    const sec = this.computeTwoDigitNumber(this.getSeconds())
    const centisec = this.computeTwoDigitNumber(this.getCentiseconds())



    return `${min}:${sec}:${centisec}`


  }

}

