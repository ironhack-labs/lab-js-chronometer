class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }
  /******************************************** */

  start(printTimeCallback) {
    let intervalId = setInterval(() => {
      this.currentTime++;
      console.log(this.currentTime);
      printTimeCallback();
    }, 1000);
  }

  /******************************************** */
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}

let chronometer = new Chronometer();
hey = () => {
  console.log("heeeeey");
};
console.log(chronometer.start(hey));
