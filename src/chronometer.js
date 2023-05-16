class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    const intervalId = setInterval(()=> {
      if (typeof printTimeCallback === "function"){
        printTimeCallback();
      };
      this.currentTime++;
    }, 1000)
  }

  getMinutes() {
    // ... your code goes here
    let totalMinutes = Math.floor(this.currentTime/60);
    return totalMinutes;
  }

  getSeconds() {
    // ... your code goes here
    let totalSeconds = this.currentTime % 60;
    return totalSeconds;
  }


  computeTwoDigitNumber(value){
  
    if (value < 10) {
      return '0' + value.toString();
    } else {
      return value.toString();
    }
  }
  

  stop() {
    // ... your code goes here
    clearInterval(this.currentTime);
  }

  reset() {
    // ... your code goes here
    this.currentTime=0; 
  }

 
    // ... your code goes here

   //return `${this.computeTwoDigitNumber(this.getMinutes())}:${ this.computeTwoDigitNumber( this.getSeconds() ) }`;

   split() {
    // ... your code goes here
    const splitMinutes = this.computeTwoDigitNumber(this.getMinutes());
    const splitSeconds = this.computeTwoDigitNumber(this.getSeconds());
    return splitMinutes + ':' + splitSeconds;
  }
}

