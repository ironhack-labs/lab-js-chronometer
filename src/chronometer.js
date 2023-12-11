class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (typeof printTimeCallback === "function") printTimeCallback();
    }, 1000);
  }

  getMinutes() {
    const minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    const remainingSeconds = this.currentTime % 60;
    return remainingSeconds;
  }

  computeTwoDigitNumber(value) {
    const numericValue = parseInt(value, 10);

    const twoDigitString = numericValue.toString().padStart(2, "0");

    return twoDigitString;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }
  split() {
    const minutes = Math.floor(this.currentTime / 60);
    const seconds = this.currentTime % 60;

    const validMinutes = this.computeTwoDigitNumber(minutes);
    const validSeconds = this.computeTwoDigitNumber(seconds);

    return `${validMinutes}:${validSeconds}`;
  }
}
