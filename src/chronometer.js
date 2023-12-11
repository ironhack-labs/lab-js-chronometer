class Chronometer {
  constructor() {
    this.currentTime= 0
    this.intervalId= null
  } 
  start(printTimeCallback) {
    this.intervalId = setInterval(()=>{
      this.currentTime +=1 
      if(printTimeCallback){
        printTimeCallback()
      }
    },1000)
  }
  getMinutes() {
    return Math.floor(this.currentTime/60)
  }

  getSeconds() {
    if(this.currentTime===0||this.currentTime===60){
      return 0
    }
    if (this.currentTime%60!==0){
      return this.currentTime%60
    }
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
    return `${mm}:${ss}`
  }
}
