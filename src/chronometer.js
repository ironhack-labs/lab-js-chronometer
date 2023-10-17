class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    const timer = setInterval(()=>{
      this.currentTime++;
      if(this.currentTime>10){
        console.log(this.getMinutes());
      }
      this.intervalId = timer;
      if(printTimeCallback){
        printTimeCallback()
      }
    }, 1000)
  
  }

  getMinutes() {
    const minutes = Math.floor(this.currentTime / 60)
    if(this.intervalId<0){
      return 0
    }
    else{
      return minutes
    }
  }

  getSeconds() {
    const seconds = this.currentTime % 60;
    if(this.currentTime<1){
      return 0
    }
    else{
      return seconds
    }
  }

  computeTwoDigitNumber(value) {
    if(value<10){
      return "0" + value;
    }
    else{
      return value.toString()
    }
  }

  stop() {
      clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime=0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes())
    const seconds = this.computeTwoDigitNumber(this.getSeconds())
    return minutes + ":" + seconds;
  }
}
