class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;                                                                           
    },1000)

    return this.intervalId;
  }

  getMinutes() {
    // ... your code goes here
    if(this.currentTime === 0){
      return 0;
    }
    else{
      if(this.currentTime > 0 && this.currentTime < 10){
        return '0' + Math.floor(this.currentTime / 60);
      }else if(this.currentTime >= 10){
        return Math.floor(this.currentTime / 60);
      }
    }
  }

  getSeconds() {
    // ... your code goes here
    if(this.currentTime === 0){
      return 0;
    }else{
      return Math.floor(this.currentTime % 60);
    }
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if(value === 0){
      return '00';
    }else if(value > 0 && value < 10){
      return '0' + value;
    }else if(value >= 10){
      return value = String(value);
    }
  }

  stop() {
    // ... your code goes here
    return clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    return this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    return `${this.getMinutes()}:${this.getSeconds()}`;
  }
  
}


console.log(Chronometer.currentTime);
