class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    console.log(printTimeCallback)
      this.intervalId = setInterval(()=>{
      this.currentTime++;
      if(printTimeCallback){
        printTimeCallback();
      }     
    },1000);
}



  getMinutes() {
    // ... your code goes here
    let minutes = Math.floor(this.currentTime/60);
    return minutes

}

  getSeconds() {
    // ... your code goes here
    let seconds = Math.floor(this.currentTime % 60)
    return seconds
    
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if(value < 10){
      return (`0${(value)}`)
    }
    return value.toString()
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
    this.intervalId = 0;
    
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
    let minutesStamp = this.getMinutes();
    minutesStamp = this.computeTwoDigitNumber(minutesStamp);
    let secondsStamp = this.getSeconds();
    secondsStamp = this.computeTwoDigitNumber(secondsStamp);
    console.log(minutesStamp)
    let timeStamp = minutesStamp + ':' + secondsStamp;
    return timeStamp
  }
}
