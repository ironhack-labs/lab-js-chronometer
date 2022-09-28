class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }
 start(printTimeCallback) {
 console.log(printTimeCallback)
      this.intervalId = setInterval(()=>{
      this.currentTime++;
      
      if(printTimeCallback){
        printTimeCallback();
      }     
    },1000);
}
   getMinutes() {
    let minutes = Math.floor(this.currentTime/60);
    return minutes
}
  getSeconds() {
    let seconds = Math.floor(this.currentTime % 60)
    return seconds
  }  
  computeTwoDigitNumber(value) {
    if(value < 10){
      return (`0${(value)}`)
    }
    return value.toString()
  }  
  stop() {
    clearInterval(this.intervalId);
    this.intervalId = 0;
  }

  reset() {
    this.currentTime = 0
  }
  split() {
    let minutesStamp = this.getMinutes();
    minutesStamp = this.computeTwoDigitNumber(minutesStamp);
    let secondsStamp = this.getSeconds();
    secondsStamp = this.computeTwoDigitNumber(secondsStamp);
    console.log(minutesStamp)
    let timeStamp = minutesStamp + ':' + secondsStamp;
    return timeStamp  }
  }
