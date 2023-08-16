class Chronometer {
  constructor() {

  }
      this.currentTime = 0;
      this.intervalId = null;
    }

  start(printTimeCallback) {
  
  }

    this.intervalID = setInterval(()=>{
      this.currentTime++;
      if (typeof printTimeCallback === 'function'){
        printTimeCallback(this.currentTime);
      }
    },1000)
    }


  getMinutes() {
  
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {

    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
  
    if (value <10) {
      return "0"+ value.toString();
    } else { 
      return value.toString()
    }
  }

  stop() {

    return clearInterval(this.intervalID);

  }

  reset() {
   
    return this.currentTime = 0
  }

  split() {

     const minutes = this.computeTwoDigitNumber(this.getMinutes());
     const secundes = this.computeTwoDigitNumber(this.getSeconds());
     return `${minutes}:${seconds}`
  }
}