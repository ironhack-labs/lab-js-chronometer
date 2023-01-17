class Chronometer {
  constructor() {
this.currentTime = 0
this.intervalId = null
  }
  start(printTimeCallback) {
    
  }

  getMinutes() {
  const minutes = Math.floor(this.currentTime/60)
  return minutes
  }

  getSeconds() {
    const seconds = this.currentTime % 60
    return seconds
  }

  computeTwoDigitNumber(value) {
    if ( value < 10){
      return '0' + value; 
    }
    return value.toString()
  }

  stop() {
  clearInterval(this.intervalId);
  }

  reset() {
  this.currentTime = 0
  }

  split() {
    let minutes = getMinutes();
    let seconds = getSeconds();
    let splitMinutes = computeTwoDigitNumber(minutes);
    let splitSeconds = computeTwoDigitNumber(seconds);
    return splitMinutes + ':' + splitSeconds 
  }
}
