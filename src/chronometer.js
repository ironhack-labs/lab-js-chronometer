class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {

    if (typeof printTimeCallback !== "function") {
      printTimeCallback = () => {};
    }

    this.intervalId = setInterval(() => {
      this.currentTime++;
      printTimeCallback(this.currentTime);
    }, 1000);
  }


  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {

    let num = value.toString();
    
    if(num.length === 1) {
      return 0 + num
    } else if (num.length === 2 ) {
      return num
    } else if (num.length > 2) {  
      return num.slice(2, num.length - 2)
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
  }
}
