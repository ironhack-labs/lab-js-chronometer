class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() =>{
      this.currentTime++
      if (printTimeCallback){
      printTimeCallback()}
    }, 1000)
  }

  getMinutes() {
    if (this.currentTime === 0) {
      return 0;
    }
    else {
      return Math.floor(this.currentTime / 60);
    }}

  getSeconds() {
    if (this.currentTime === 0) {
      return 0;
    }
    else {
      return this.currentTime % 60;
    }
  }
  computeTwoDigitNumber(value) {
    if(value <= 9) {
      return `0${value}`
    }
    else {
      return `${value}`;
    }
  }
  stop() {
    clearInterval(this.currentTime);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let min = this.computeTwoDigitNumber(this.getMinutes());
    let seg = this.computeTwoDigitNumber(this.getSeconds());
    return `${min}:${seg}`;
}
}
