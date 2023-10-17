class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    const timer = setInterval(()=>{
      this.currentTime++;
      this.intervalId = timer;
      if(printTimeCallback){
        printTimeCallback()
      }
    }, 10)
  }

  getMinutes() {
    const minutes = Math.floor(this.currentTime / 6000)
    if(this.intervalId<0){
      return 0
    }
    else{
      return minutes
    }
  }

  getSeconds() {
    return Math.floor((this.currentTime / 100) % 60);
  }

  getCentiseconds() {
    return (this.currentTime % 100)
  }

  computeTwoDigitNumber(value) {
    if(value<10){
      return "0" + value;
    }
    else{
      return value.toString()
    }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime=0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes())
    const seconds = this.computeTwoDigitNumber(this.getSeconds())
    const centi = this.computeTwoDigitNumber(this.getCentiseconds())
    return minutes + ":" + seconds + "." + centi;
  }
}
