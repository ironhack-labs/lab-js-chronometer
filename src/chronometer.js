class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    let intervalId = (() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
      console.log(this.currentTime);
    });
    this.intervalId = setInterval(intervalId, 1000);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
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
   return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}

let chronometer = new Chronometer();
hey = () => {
  console.log("heeeeey");
};
console.log(chronometer.start(hey));

//let chrono2 = new Chronometer();
//chrono2.start(hey);
console.log(chronometer.stop());
