class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
  this.intervalId = setInterval(
    () => {
    if (printTimeCallback) printTimeCallback();
    this.currentTime++;
    console.log(this.currentTime)
  },1000)
}
  

  

  getMinutes() {
  
 console.log(this.currentTime / 60)
       let minutes = Math.floor(this.currentTime/ 60 )
  return minutes
      }

  getSeconds() {
   return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
  if (value < 10)return `0${value}`
  return `${value}`
  }
   
  

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
  this.currentTime = 0;
  }

  split() {
   const minutes = this.computeTwoDigitNumber(this.getMinutes())
   const seconds = this.computeTwoDigitNumber(this.getSeconds())
   return `${minutes}:${seconds}`
  }
}
