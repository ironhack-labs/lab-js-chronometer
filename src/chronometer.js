class Chronometer {
  constructor() {
      this.currentTime = 0;
      this.intervalId = null;
    // ... your code goes here
  }

  start(printTimeCallback) {
    this.intervalId=setInterval(() => {
      this.currentTime ++;
      if(printTimeCallback) {
        printTimeCallback()
      }
    }, 1000);// ... your code goes here
  }

  getMinutes() {
    console.log(this.currentTime / 60);
    return Math.floor(this.currentTime / 60);// ... your code goes here
  }

  getSeconds() {
    console.log(this.currentTime % 60);
    return Math.floor(this.currentTime % 60);// ... your code goes here
  }

  computeTwoDigitNumber(value) {
    if (value<10){
        return "0" + value;
    }
    return `${value}`; // ... your code goes here
  }

  stop() {
    clearInterval(this.intervalId);// ... your code goes here
  }

  reset() {
    this.currentTime=0;// ... your code goes here
  }

  split() {
    const min=this.getMinutes();
    const seg=this.getSeconds();
    console.log("Minutos y segundos", this.computeTwoDigitNumber(min), this.computeTwoDigitNumber(seg));
    
    return this.computeTwoDigitNumber(min) + ":" + this.computeTwoDigitNumber(seg);// ... your code goes here
  }
}
