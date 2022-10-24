class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 1000);

    if(printTimeCallback){
      this.intervalId = setInterval(() => printTimeCallback(), 1000);
      // this.intervalId = setInterval(printTimeCallback,1000);
    }
    // clearInterval(this.intervalId)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
    
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    let digitArr = [];
    let digit = value.toString();
    let result = "";

    if(digit.length < 2){
      digitArr.push("0");
      digitArr.push(digit);
      result = digitArr.join("");
      return result;
    } else {
      result = value.toString();
      return result;
    }
    // ... your code goes herE
  }
    // ... your code goes herE
  

  stop() {
    clearInterval(this.intervalId)
    // ... your code goes here
  }

  reset() {
    this.currentTime = 0;
    // ... your code goes here
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
    // ... your code goes here
  }
}
