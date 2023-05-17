class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
   this.IntervalId = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback) {
        printTimeCallback();
    }
   }, 1000);
  }


  getMinutes() {
    // ... your code goes here
    const wholeMinute = this.currentTime / 60;
    return Math.floor(wholeMinute);
  }

  getSeconds() {
    // ... your code goes here
    const remainderSeconds = this.currentTime % 60;
    if (!this.currentTime) {
      return 0;
    } 
    if (this.currentTime % 60 !== 0) {
      return remainderSeconds;
    }
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    const pad = "00";
    return (pad + value).slice(-pad.length);
    
  }

  stop() {
    // ... your code goes here
    clearInterval(this.IntervalId);
  }

  reset() {
    // ... your code goes here
    return this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    return `this.getMinutes.split[0, 1]":"this.getSeconds.split[2, 3]`;

    const formatMinutes = this.getMinutes.split[0, 1];
    const formatSeconds = this.getSeconds.split[2, 3];
    this.currentTime = `formatMinutes : formatSeconds`;
    return this.currentTime;
  }
}
