class Chronometer {
  constructor() {
    
  this.currentTime = 0;
  this.intervalId = null;
}
  

  start(printTimeCallback) {
this.intervalId = setInterval(()=>{
  this.currentTime++;
    if(printTimeCallback){
      printTimeCallback();
    }
    return console.log((this.currentTime%60))  
},1000)
}

  getMinutes() {
    return Math.floor((this.currentTime/60))
  }

  getSeconds() {
    return Math.floor((this.currentTime%60))
  }

  computeTwoDigitNumber(value) {
    if(value.length ===2){
      return value.toString();
    }else{
    return value.toString().padStart(2,0)
    }
  }

  stop() {
 clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}
