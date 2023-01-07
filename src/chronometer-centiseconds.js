class Chronometer {
  constructor() {
    this.currentTime=0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval( () => { 
      if(printTimeCallback) {
        printTimeCallback();
      } 
      this.currentTime++;
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime/(60*100))  }

  getSeconds() {
    return Math.floor(this.currentTime/100)%60
  }

  getCentiseconds() {
    return (this.currentTime -(this.getMinutes()*1000))%100
  }

  computeTwoDigitNumber(value) {
    if (value.toString().length === 2){
      return value.toString()
    }
    else {
      return '0'+value.toString()
    }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime=0
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}.${this.computeTwoDigitNumber(this.getCentiseconds())}`
  }
}

let ch1 = new Chronometer()

ch1.currentTime = 1725
console.log(ch1.split());
