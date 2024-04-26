class Chronometer {
  constructor() {
    // ... your code goes here
  }

  start(printTimeCallback) {
    // ... your code goes here
  }

  getMinutes() {
    // ... your code goes here
  }

  getSeconds() {
    // ... your code goes here
  }

  getCentiseconds() {
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}

/*
class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime =0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    if(typeof printTimeCallback!== undefined){
      this.intervalId=setInterval(()=> {this.currentTime++,1;
        printTimeCallback()});
    }
    
  }

  getMinutes() {
    return Math.floor(this.currentTime/60000);
    }

  getSeconds() {
    return this.currentTime%60000;
  }

  getCentiseonds(){
    return this.currentTime/10;
  }

  computeTwoDigitNumber(value) {
    if(value <10){
      return "0"+value;
    }
    else{
      return value;
    } 
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    reset();

    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds)}:${this.computeTwoDigitNumber(this.getCentiseonds())}`;
  }

}

const cron= Chronometer();


*/