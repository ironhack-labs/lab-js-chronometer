class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null;  
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(()=>{
      if (typeof printTimeCallback === "function"){
        printTimeCallback()
      }
      this.currentTime++ 
    },1000)
    
   }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    let string = value.toString()
    if (string.length < 2){
      return "0"+string;
    } else return string  
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
   const minutes = this.getMinutes()
   const seconds = this.getSeconds()
   const formatedMinutes = this.computeTwoDigitNumber(minutes)
   const formatedSeconds = this.computeTwoDigitNumber(seconds)
   console.log(`${formatedMinutes}:${formatedSeconds}`)
   return `${formatedMinutes}:${formatedSeconds}`
  }
}
