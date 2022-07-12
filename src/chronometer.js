class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback){

     this.intervalId = setInterval(()=>{
      this.currentTime++;
      if(printTimeCallback){
        printTimeCallback();
      };
    }, 1000); 
};

  getMinutes() {
   let minutes = (this.currentTime / 60);
   return Math.floor(minutes);
  }

  getSeconds() {
    let minutes = (this.currentTime / 60);
    let seconds = minutes * 60;
    let result = seconds % 60;
    return result;
  }

  computeTwoDigitNumber(value) {

    if(value < 10){
     return  `0${value}`
    }
    else {
    return `${value}`; 
    }
  }

  stop() {
    clearInterval(this.intervalId);


  };

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    return `${minutes}:${seconds}`
}
};
