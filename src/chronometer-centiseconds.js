class Chronometer {
  constructor() {
   this.currentTime= 0
   this.intervalId=null
  }

  start(printTimeCallback) {
    this.intervalId= setInterval(() => {
      this.currentTime++
    }, 10)
    if (printTimeCallback) {
      let intervalId= setInterval(() => {
       printTimeCallback()
    }, 10)
    }
  }

  getMinutes() {
  let totalMinspart = this.currentTime / 6000
    return Math.floor( totalMinspart)
  }

  getSeconds() {
    let totalSecondspart = this.currentTime%6000/100
   return Math.floor(totalSecondspart) 
  }

  getCentiseconds() {
    let totalCentisends = (this.currentTime) %100
    return  totalCentisends
  }

  computeTwoDigitNumber(value) {
     let stringNumber = value.toString()
    if (stringNumber.length === 1) {
     stringNumber= "0"+stringNumber
    } 
    return stringNumber
  }

  stop() {
    clearInterval( this.intervalId)
  }

  reset() {
    this.currentTime= 0
  }

  split() {
   return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}.${this.getCentiseconds()}`
  }
}
