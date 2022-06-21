class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
   const interval = setInterval(() => {
     this.currentTime ++
     if ( typeof printTimeCallback === "function" ) {
      printTimeCallback()
     }
    },1000 )
    this.intervalId = interval
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60 ;
  }

  computeTwoDigitNumber(value) {
   if (value < 10 ) {
    return `0${value}`
    } else if (value > 10) {
    return `${value}`
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const X = this.computeTwoDigitNumber(this.getMinutes());
    const Y = this.computeTwoDigitNumber(this.getSeconds());
    return `${X}:${Y}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
