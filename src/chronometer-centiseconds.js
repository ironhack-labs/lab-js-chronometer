class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {

    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      printTimeCallback();
    },10)

  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    return Math.floor((this.currentTime % 6000) / 100);
  }

  getCentiseconds() {
    return this.currentTime % 100;
  }

  computeTwoDigitNumber(value) {
    //padStart(size, element) add N elements at start to size===string.length
    let number = value.toString().padStart(2, "0");
    // console.log(value, number);
    return number;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
    this.centiTime = 0;
  }

  split() {
    const mm = this.computeTwoDigitNumber(this.getMinutes());
    const ss = this.computeTwoDigitNumber(this.getSeconds());
    const cc = this.computeTwoDigitNumber(this.getCentiseconds());
    // console.log(mm);
    return `${mm}:${ss}.${cc}`;

  }
}
