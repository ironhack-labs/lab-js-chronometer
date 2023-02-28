class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    if(typeof printTimeCallback === 'function' && printTimeCallback) {
      this.intervalId = setInterval(() => {
        this.currentTime += 1;
        printTimeCallback(this.currentTime);
      }, 1000);
    } else {
      this.intervalId = setInterval(() => {
        this.currentTime += 1;
      }, 1000);
    }
  }

  getMinutes() {
    if(this.currentTime === 0) {
      return 0;
    } else {
      return Math.floor(this.currentTime / 60);
    }
  }

  /* THIS PASSES JASMINES TESTS TOO: 
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  */

  getSeconds() {
    if(this.currentTime === 0) {
      return 0;
    } else {
      return (this.currentTime % 60);
    }
  }

  /* THIS PASSES JASMINE TESTS TOO:
  getSeconds() {
    return (this.currentTime % 60);
  }
  */

  computeTwoDigitNumber(value) {
    const stringifiedNumber = value.toString();
    
    if(stringifiedNumber.length === 1) {
      return `0${stringifiedNumber}`;
    } else {
      return stringifiedNumber.slice(-2);
    }
  }

  /*ANOTHER WAY TO DO IT USING .padStart()
  Link: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

  computeTwoDigitNumber(value) {
    return value.toString().padStart(2, '0');
  }

  This tries to fill the string until a defined length (the first parameter).
  In our case, if it's two, it will return the string unmodified. 
  If it's one it will add '0' (the second parameter).
  */

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null; // We give the variable it's initial value. 
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const newSplitMinutes = this.computeTwoDigitNumber(this.getMinutes());
    const newSplitSeconds = this.computeTwoDigitNumber(this.getSeconds());
    
    return `${newSplitMinutes}:${newSplitSeconds}`;
  }
}
