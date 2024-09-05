class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    console.log("start");
    this.intervalId = setInterval(() => {
      // printTimeCallback()
      this.currentTime += 1;
      printTimeCallback();
    },1000)

  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    //padStart(size, element) add N elements at start to size===string.length
    let number = value.toString().padStart(2, "0");
    // console.log(value, number);
    return number;
  }

  stop() {
    clearInterval(this.intervalId);
    clearInterval(this.centiIntervalId);
  }

  reset() {
    this.currentTime = 0;
    this.centiTime = 0;
  }

  split() {
    const mm = this.computeTwoDigitNumber(this.getMinutes());
    const ss = this.computeTwoDigitNumber(this.getSeconds());
    // console.log(mm);
    return `${mm}:${ss}`;

  }
}
