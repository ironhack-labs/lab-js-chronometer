class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
      this.intervalId = setInterval(() => {
      this.currentTime++;
      if (arguments.length > 0 && typeof printTimeCallback === 'function'){
        printTimeCallback();
        }
      }, 1000);
}

  getMinutes() {
    return Math.floor(this.currentTime / 60)

  }

  getSeconds() {
    return this.currentTime % 60;
  }

  // getCenti(){
  //   return this.currentTime / 100;
  // }

  computeTwoDigitNumber(value) {
    if(value > 9){
      return '' + value; //could also use return value.toString()
    }
    return `0${value}`;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    // let centi = this.getCenti();
    let min = this.getMinutes();
    let sec = this.getSeconds();
    return `${this.computeTwoDigitNumber(min)}:${this.computeTwoDigitNumber(sec)}`; //:${this.computeTwoDigitNumber(centi)}
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
