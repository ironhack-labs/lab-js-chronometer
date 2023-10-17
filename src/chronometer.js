class Chronometer {
    constructor() {
      this.currentTime = 0;
      this.intervalId = null;
  }

  start(printTimeCallback) {
    setInterval(()=>{
      if (printTimeCallback){
        printTimeCallback()
      }
      this.currentTime ++;
    }, 1000)
  }

  getMinutes() {
    // ... your code goes here
    let  minutes = this.currentTime/60;
    return Math.floor(minutes);
  }

  getSeconds() {
    // ... your code goes here
    let seconds = 0;
    seconds = this.currentTime % 60
    return seconds;

  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let  numberString = "";
    value = value.toString();

    if (value.length < 2){
      numberString = "0"+ value;
    }
    else {
      numberString = value;
    }
    return numberString
  }

  stop() {
    return clearInterval(this.currentTime)
    // ... your code goes here
  }

  reset() {
    return this.currentTime = 0;
    // ... your code goes here
  }

  split() {
    let displayMinutes = this.computeTwoDigitNumber(this.getMinutes())
    let displaySeconds = this.computeTwoDigitNumber(this.getSeconds())

    return `${displayMinutes}:${displaySeconds}`
    // ... your code goes here
  }
}
