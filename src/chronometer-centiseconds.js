class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    
    this.intervalId = setInterval (() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      };

  }, 10); 
  }


  getMinutes() {
    // ... your code ges here

    return Math.floor(this.currentTime / 6000)
  }

  getSeconds() {
    // ... your code goes here

    return Math.floor(this.currentTime/100) % 60
  }

  getCentiseconds() {
    // ... your code goes here

    return this.currentTime % 100
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here


    if (value < 10) {
      return `0${value}`
    }
    else return `${value}`
    

  }

  stop() {
    // ... your code goes here

    clearInterval(this.intervalId);


  }

  reset() {
    // ... your code goes here

    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    
    let minutes = this.getMinutes();
    let seconds = this.getSeconds();
    let centiseconds = this.getCentiseconds();


    let minutes2D = this.computeTwoDigitNumber(minutes);
    let seconds2D = this.computeTwoDigitNumber(seconds);
    let centiseconds2D = this.computeTwoDigitNumber(centiseconds)
    
    return `${minutes2D}:${seconds2D}.${centiseconds2D}`
  }
}
