class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
    // ... your code goes here
  }
  
  start(printTimeCallback) { 
       
    this.intervalId = setInterval((() => {
      this.currentTime += 1
      printTimeCallback();
    }), 1000)
      
        
  }

  getMinutes() {
    // ... your code goes here
    let minutes = Math.floor(this.currentTime/60)
    console.log(minutes)
    return minutes
  }

  getSeconds() {
    let seconds = this.currentTime % 60
    console.log(seconds)
    return seconds
  }

  computeTwoDigitNumber(value) {
    let string = ''
    if (value < 10){
      string = '0' + value     
    } else {
    string = '' + value
    }
    return string.slice(string.length-2,string.length)
    // ... your code goes here
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
    // ... your code goes here
  }

  split() {
    // ... your code goes here
    let minuets = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    return  (minuets + ':' + seconds)
  }
}
