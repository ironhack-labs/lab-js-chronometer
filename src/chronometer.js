class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.currentMilliseconds = 0; // <= BONUS
    this.millisecondsIntervalId = 0 // <= BONUS
  }

  start(callback, /* BONUS => */ printMilliseconds) {
    this.intervalId = setInterval( () => {
      this.currentTime++;
      if (callback) callback();
    }, 1000);

    // BONUS =>
    // Can be merged into same setInterval. Done separatly for better understanding of mandatory iterations.
    this.millisecondsIntervalId = setInterval( () => {
      if (this.currentMilliseconds === 99) {
        this.currentMilliseconds = 0;
      }
      this.currentMilliseconds += 1;
      if (printMilliseconds) printMilliseconds();
    }, 10);
  }

  getMinutes() {
    let currentTimeMin = Math.floor(this.currentTime / 60);
    console.log(currentTimeMin)
    return currentTimeMin;
  }

  getSeconds() {
    let currentTimeSec = this.currentTime % 60;
    return currentTimeSec;
  }

  computeTwoDigitNumber(value) {
    return ("0" + value).slice(-2);
  }

  stop() {
    clearInterval(this.intervalId);
    clearInterval(this.millisecondsIntervalId);
  }

  reset() {
    this.currentTime = 0;
    // BONUS =>
    this.currentMilliseconds = 0;

  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let milliseconds = this.computeTwoDigitNumber(this.currentMilliseconds); // <= BONUS 

    return `${minutes}:${seconds}:${milliseconds}`;
  }
}