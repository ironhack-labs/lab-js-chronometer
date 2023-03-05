class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = null
  };

//explicación en "JS | Async & Callbacks - Time to practice 2".
  start(printTimeCallback) {
    setInterval(()=>{
      this.currentTime++;
      if(printTimeCallback){
          printTimeCallback();
      }
    }, 1000);
  };

 getMinutes() {
    if(this.currentTime === 0){
      return 0;
    }
    return Math.floor(this.currentTime / 60);
  };

  getSeconds() {
    return this.currentTime
  };

  computeTwoDigitNumber(value) {
    if(value < 10){
      return "0" + value.toString();
    }
      return value.toString();
  };

  stop() {
    clearInterval(this.intervalId);
  };

  reset() {
    return this.currentTime = 0;
  };

  split() {
  return this.computeTwoDigitNumber(this.getMinutes()) + ":" + this.computeTwoDigitNumber(this.getSeconds())
    
  };
};
