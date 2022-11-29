class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() =>{
this.currentTime ++;
if(typeof printTimeCallback ==="function"){
  printTimeCallback();
} 
    },10);

  }

  getMinutes() {
    // ... your code goes here
    let seconds = this.currentTime / 100;
    if(this.currentTime === 0){
      return 0;
    }
    return Math.floor(seconds / 60);
    
}

  getSeconds() {
    // ... your code goes here
    let seconds = this.currentTime / 100;
   if(this.currentTime === 0){
    return 0;
   }
   return Math.floor(seconds % 60);
   }

  getCentiseconds() {
    // ... your code goes here
   return this.currentTime % 100 ;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return String("00" + value).slice(-2);
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
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const centiSeconds = this.computeTwoDigitNumber(this.getCentiseconds());
    return `${minutes}:${seconds}.${centiSeconds}`;
  }
}
