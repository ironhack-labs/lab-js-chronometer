
//BONUS 9: Milliseconds (code in comments)


class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    // this.currentMilliseconds = 0;
    // this.millisecIntervalId = null;
  }

  start(printTimeCallback) {

    this.intervalId = setInterval(() => {
      this.currentTime++;

      if(typeof printTimeCallback === "function") {
        printTimeCallback();
      }
    }, 1000);

    // this.millisecIntervalId = setInterval(() => {
    //   this.currentMilliseconds += 10; // --> adding 10 for timer accuracy (setInterval Documentation: delay is set to  10 if lower than 10)

    //   if(typeof printTimeCallback === "function") {
    //     printTimeCallback();
    //   }
    // }, 10);

  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
    // return Math.floor((this.currentMilliseconds / 1000) / 60)
  }

  getSeconds() {
    return this.currentTime % 60;
    // return Math.floor((this.currentMilliseconds / 1000) % 60);
  }

  // getMilliseconds() {
  //   return Math.floor((this.currentMilliseconds % 1000 / 10));
  // }

  computeTwoDigitNumber(value) {
    let numberStr;

    if (value < 10) {
      return numberStr = `0${value}`;
    }

    return numberStr = `${value}`;
  }

  stop() {
    clearInterval(this.intervalId);
    clearInterval(this.millisecIntervalId);
  }

  reset() {
    this.currentTime = 0;
    this.currentMilliseconds = 0;
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    // let milliseconds = this.computeTwoDigitNumber(this.getMilliseconds());
    
    return `${minutes}` + `:${seconds}` //+ `:${milliseconds}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
