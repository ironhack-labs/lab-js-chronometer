class Chronometer {
  constructor() {
    this.currentTime = 0; // centiseconds
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if(typeof printTimeCallback === "function") printTimeCallback()
    },10)
  }

  getMinutes() {
    const seconds = this.currentTime / 100
    return Math.floor(seconds / 60);
  }

  getSeconds() {
    const totalSecondsPassed =  Math.floor(this.currentTime / 100);
    const minutesPassedInSeconds = this.getMinutes() * 60
    return totalSecondsPassed-minutesPassedInSeconds;
  }

  getCentiseconds() {
    if (this.currentTime === 0) {
      return 0;
    }

    const totalMinutesPassedInCentiseconds = this.getMinutes() * 60 * 100;
    const totalSecondsPassedInCentiseconds = this.getSeconds() * 100;
    const totalCentisecondsPassed = this.currentTime;

    return (
      totalCentisecondsPassed -
      (totalMinutesPassedInCentiseconds + totalSecondsPassedInCentiseconds)
    );
  }

  computeTwoDigitNumber(value) {
    return value.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    })
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const centiseconds = this.computeTwoDigitNumber(this.getCentiseconds());

    return `${minutes}:${seconds}.${centiseconds}`;
  }
}
