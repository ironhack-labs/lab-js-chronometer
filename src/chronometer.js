class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
      this.incrementTime  = setInterval(() => {
        this.currentTime +=1;
        if(printTimeCallback){
          printTimeCallback(this.currentTime);
        }
      }, 1000);
  }

  getMinutes() {
   let counterOfMinutes = Math.floor(this.currentTime / 60);

   return counterOfMinutes;
  }

  getSeconds() {
    let counterOfSeconds = Math.floor(this.currentTime % 60);

    return counterOfSeconds;
  }

  computeTwoDigitNumber(value) {
    if(value >= 0 && value < 10){
      return `0${value}`;
    }else if(value >= 10){
      return `${value}`;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let getThisMinutes = this.computeTwoDigitNumber(this.getMinutes());
    let getThisSeconds = this.computeTwoDigitNumber(this.getSeconds());

    return `${getThisMinutes}:${getThisSeconds}`;
  }
}
