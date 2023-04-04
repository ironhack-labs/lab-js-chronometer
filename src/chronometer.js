class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    
    this.intervalId = setInterval(() => {
      this.currentTime++;
      
      if(printTimeCallback){
        printTimeCallback(this.currentTime);

      }
      }, 1000);
     
  }
  
    

  getMinutes() {
    // ... your code goes here
     let newVal = Math.floor(this.currentTime/60)
     return newVal
  }

  getSeconds() {
    // ... your code goes here
    let secondGet = this.currentTime % 60;
    return secondGet
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let newStr = value.toString()
    if(newStr.length === 1){
      return "0"+newStr
    }
    else{
      return newStr
    }
  }

  stop() {
    // ... your code goes here
    return clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime=0;
    
  }

  split() {
    // ... your code goes here
    let new1=this.computeTwoDigitNumber(this.getMinutes())
    let new2=this.computeTwoDigitNumber(this.getSeconds())
    return `${new1}:${new2}`

  }
}
