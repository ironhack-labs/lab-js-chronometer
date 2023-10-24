class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime=0,
    this.intervalId=null
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(()=>{
      this.currentTime += 1;
      if(printTimeCallback){
        printTimeCallback();
      }
    },10);
  }

  getMinutes() {
    // ... your code goes here
    let minutes = Math.floor(this.currentTime / 6000);
    return minutes;
  }

  getSeconds() {
    // ... your code goes here
    let seconds = (this.currentTime/100)%60;
    return seconds;
  }

  getCentiseconds() {
    // ... your code goes here
    let centiseconds = (this.currentTime)%100;
    if(!this.currentTime){return 0}
      return centiseconds;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value < 10) {
      return "0" + value;
    }
      return value.toString();
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    let minutes = this.getMinutes();
    let stringMinutes = this.computeTwoDigitNumber(minutes);
    let seconds = this.getSeconds();
    let stringSeconds = this.computeTwoDigitNumber(seconds);
    let centiseconds = this.getCentiseconds();
    let stringCentiseconds = this.computeTwoDigitNumber(centiseconds);
    return `${stringMinutes}:${stringSeconds.slice(0,2)}.${stringCentiseconds}`;
  }
}
