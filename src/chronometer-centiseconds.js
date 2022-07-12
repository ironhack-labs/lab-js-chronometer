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
    }, 10); 
};

  getMinutes() {
   let minutes = (this.currentTime / 6000);
   return Math.floor(minutes);
  }

  getSeconds() {
   return Math.floor(this.currentTime / 100) % 60;
  }

  computeTwoDigitNumber(value) {

    if(value < 10){
     return  `0${value}`
    }
    else {
    return `${value}`; 
    }
  }

  getCentiseconds(){
    return this.currentTime % 100;
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
    let centiseconds = this.computeTwoDigitNumber(this.getCentiseconds());
    return `${minutes}:${seconds}.${centiseconds}`
}
};
