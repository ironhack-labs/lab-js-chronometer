class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }
  
  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(()=>{
      this.currentTime += 1;
    },1000);
    setInterval(printTimeCallback,1000);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime/60)
  }

  getSeconds() {
    // ... your code goes here
   return this.currentTime % 60;

  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value<10){
      value = '0' + value;
      return value;
    } else {
      value = '' + value;
      return value;
    }
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
    if (this.currentTime <10){
      return `00:0${this.currentTime}`;
    } else if (this.currentTime >9 && this.currentTime<60){
      return `00:${this.currentTime}`;
    } else if (this.currentTime === 60){
      return `0${this.currentTime/60}:00`
    } else if (this.currentTime >60 && this.currentTime <600){
      return `0${Math.floor(this.currentTime/60)}:${this.currentTime%60}`
    } else if (this.currentTime >=600){
      return `${Math.floor(this.currentTime/60)}:${this.currentTime%60}`
    }
  }
}
