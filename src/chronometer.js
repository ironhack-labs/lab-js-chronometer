class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) printTimeCallback();
    }, 1000);
  }

  getMinutes() {
    const secondsToMinutes = Math.floor(this.currentTime / 60);
    return secondsToMinutes;
  }

  getSeconds() {
    const numbersOfSeconds = this.currentTime % 60;
    return numbersOfSeconds;
  }

  computeTwoDigitNumber(value) {
    const newTime = value;
    const stringTime = newTime.toString();

    if (stringTime <= 9) {
      return "0" + stringTime.slice(-2);
    } else {
      return stringTime;
    }
  }

  /*   if(value < 10){
    return `0${value}`
  } else {
    return `${value}`
  }
  return value; */

  // to.string - Description - The toString() method returns a string representing the specified array and its elements.
  // to.slice - method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.
  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return ``;
  }
}
