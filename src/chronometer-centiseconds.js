class Chronometer {
  constructor() {
    this.currentTime= 0
    this.intervalId= null
  }
  start(printTimeCallback) {
    this.intervalId = setInterval(()=>{
      this.currentTime += 1
      if(printTimeCallback){
        printTimeCallback()
      }
    },10)
  }
  getMinutes() {
    return Math.floor((this.currentTime/100)/60)
  }

  getSeconds() {
   return Math.floor(this.currentTime/100)%60
  }

  getCentiseconds() {
   if(this.currentTime===0 || this.currentTime===100){
    return 0
   }
   
  return (this.currentTime%100)

  }

  computeTwoDigitNumber(value) {
    if(value>=10){
      return value.toString()
    } if(value<10){
      return "0" + value.toString()
    }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime= 0
  }

  split() {
    let mm= this.computeTwoDigitNumber(this.getMinutes())
    let ss= this.computeTwoDigitNumber(this.getSeconds())
    let SS= this.computeTwoDigitNumber(this.getCentiseconds())
    return `${mm}:${ss}.${SS}`
  }
}
