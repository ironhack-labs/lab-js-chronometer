class Chronometer {
  constructor() {
   this.currentTime = 0
   this.intervalId = null
  }

  start(printTimeCallback) {
     this.intervalId = setInterval(() => {this.currentTime++; if 
      (printTimeCallback){
        printTimeCallback()
      }}, 1000);


  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60)
   }

  computeTwoDigitNumber(value) {
        let digitNumbers = value.toString()
          if (digitNumbers.length <= 1){
            return "0" + digitNumbers
          }else{
          }  return digitNumbers
          
              
        
  }

  stop() {
   clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }




  split() {
        let newSplit = getMinutes + ":" + getSeconds;
        let newSplitcop = newSplit.toString()
        return newSplitcop
    }
}
