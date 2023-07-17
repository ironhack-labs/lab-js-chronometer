class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    if(typeof printTimeCallback === 'function'){ 
    
    this.intervalId = setInterval(()=>{
      this.currentTime++;
      
      printTimeCallback(this.currentTime);
   
    }, 1000)
  }else {
    this.intervalId = setInterval(() =>{
      this.currentTime++;

    }, 1000)
  }
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime/60);
     
  }

  getSeconds() {
    // ... your code goes here
    return Math.floor(this.currentTime % 60)

  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    value = value.toString();
    if (value.length < 2 && value.length === 1) {
       return `0${value}`
    }else {
      return value
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);

  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
    let mins = this.getMinutes();
    let secs = this.getSeconds();

    let minS = this.computeTwoDigitNumber(mins);
    let secS = this.computeTwoDigitNumber(secs);

    return `${minS}:${secS}`;
  }
}
