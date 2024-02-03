class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    let intervalId = () => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
      console.log(this.currentTime);
    };
    this.intervalId = setInterval(intervalId, 10);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    let totalSeconds = this.currentTime / 100;

    if (totalSeconds >= 60) {
      return totalSeconds % 60;
    } else {
      return totalSeconds;
    }
  }
  getCentiseconds() {
    return this.currentTime % 1500;
  }

  computeTwoDigitNumber(value) {
    return value < 10 ? `0${value}` : `${value}`;
  }

  stop() {
    console.log(this.intervalId);
    clearInterval(this.intervalId);
    console.log(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(
      this.getMinutes()
    )}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}

let chronometer = new Chronometer();
hey = () => {
  console.log("heeeeey");
};
console.log(chronometer.start(hey));

let chrono2 = new Chronometer();
chrono2.currentTime = 5021000;
console.log(chrono2.getMinutes());

chrono2.currentTime = 1500;
console.log("should be 15: ");
console.log(chrono2.getSeconds());

chrono2.currentTime = 11500;
console.log("Should be 55: ");
console.log(chrono2.getSeconds());
