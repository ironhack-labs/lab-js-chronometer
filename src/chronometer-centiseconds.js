class Chronometer {
  constructor() {
      this.currentTime = 0;
      this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if(!printTimeCallback){
      } else {
        printTimeCallback()
      }

    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime/6000);
  }

  getSeconds() {
    console.log(this.currentTime, this.getMinutes())
    return Math.floor(this.currentTime/100)%60;
  }

  getCentiseconds() {
    // after removing the minutes and seconds

    // return ((this.currentTime-this.getMinutes())-(this.currentTime-this.getSeconds()))
    return this.currentTime%100
  }

  computeTwoDigitNumber(value) {
    if(value.toString().length<2){
      return `0${value}`
    } else{
      return `${value}`
    }
  }

  stop() {
    return clearInterval(this.intervalId)

  }

  reset() {
    this.currentTime = 0
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}.${this.computeTwoDigitNumber(this.getCentiseconds())}`
  }
}
