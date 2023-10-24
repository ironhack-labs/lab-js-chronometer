class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime=0
    this.intervalId=null
  }

  start(printTimeCallback) {
    
    const incrementTime = () => {
      this.currentTime++;
      if(printTimeCallback){
        printTimeCallback()
      }
    }

    const intervalInMilliSec = 1000;
    
    this.intervalId = setInterval(incrementTime, intervalInMilliSec);
   
  }

  getMinutes() {
    let count = this.currentTime / 60;
    let minuteCount = Math.floor(count)
    
    return minuteCount;
  }
  
  getSeconds() {
      // ... your code goes here
      let getSecond = this.currentTime  % 60 
      return getSecond;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    const strNum=value.toString();
    if (strNum.length===2) {
      return strNum;
    } else {
      return `0${strNum}`;
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0    
  }

  split() {
    // ... your code goes here
    const mins = this.getMinutes()
    const secs= this.getSeconds()
    const strMins=this.computeTwoDigitNumber(mins)
    const strSecs=this.computeTwoDigitNumber(secs)
    return `${strMins}:${strSecs}`
  }

}
