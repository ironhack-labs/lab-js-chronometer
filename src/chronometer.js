class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null  
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(()=>{
      if(printTimeCallback){
        printTimeCallback()
      }
      this.currentTime++
    }, 1000)
    
  }
  getMinutes() {
    // ... your code goes here
    this.minutes = this.currentTime/60
    return Math.floor(this.minutes)
  }

  getSeconds() {
    // ... your code goes here
    this.seconds = this.currentTime%60
    return this.seconds
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let stringValue = value.toString();

    if(stringValue.length === 1){
      let finalValue = `0${stringValue}`
      return finalValue
    }else{
      return stringValue
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
    let stringMinutes = this.computeTwoDigitNumber(this.getMinutes());
    let stringSeconds = this.computeTwoDigitNumber(this.getSeconds());
    let result = `${stringMinutes}:${stringSeconds}`
    return result
  }

}


