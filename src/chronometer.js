class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() =>{
      this.currentTime++;
      if(printTimeCallback){
        return printTimeCallback();
      }
    },1000)


  }

  getMinutes() {
    return Math.floor (this.currentTime/60);

  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);

  }

  computeTwoDigitNumber(value) {
   //como usar o slice nesse caso?

  }

  stop() {
    return clearInterval(this.intervalId);
  }

  reset() {
    return this.currentTime = 0;
  }

  split() {

  }
}
