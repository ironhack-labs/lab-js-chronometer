class Chronometer {
  constructor() {
   
    this.currentTime = 0;
    this.intervalId = null;
  }

  // Function is an object. Empty object is true. To check if function is passed we need to check if it exists meaning if it's true. We cannot do ==/=== true cause it will try to convert the function to a boolean value (truthy or falsy). To check if function exists / is invoked it's enough to do if (printTimeCallback) {}

  start(printTimeCallback) {
  
    this.intervalId = setInterval(() => {
      this.currentTime++
      if(printTimeCallback) printTimeCallback()
    }, 1000)
  }


  getMinutes() {
   
    return Math.floor(this.currentTime/60)
  }

  getSeconds() {

    return (this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {

    return ("0" + value).slice(-2)
    /* const valueString = value.toString()
    let convertedValue = 0 
    if(valueString.length === 1) convertedValue = ("0" + valueString)
    else if(valueString.length === 2) convertedValue = valueString
    return convertedValue */
  }

  stop() {

    clearInterval(this.intervalId)
  }

  reset() {

    this.currentTime = 0
  }

  split() {

    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    return `${minutes}:${seconds}`

  }
}
