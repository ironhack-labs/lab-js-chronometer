class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here

    if (!printTimeCallback) {
      printTimeCallback = () => {}; 
    }
    this.intervalId = setInterval(() => {
      this.currentTime++;
      printTimeCallback(this.currentTime); 
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    let minutes = this.currentTime / 60; 
    return Math.floor (minutes); 
  }


  getSeconds() {
    // ... your code goes here
    let seconds = this.currentTime % 60; 
    return seconds; 

  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let stringValue = String(value);
    
    
    if (stringValue.length < 2) {
      
      stringValue = '0' + stringValue;
    }

   
    return stringValue;
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

    let mins = this.computeTwoDigitNumber (this.getMinutes()); 
    let secs= this.computeTwoDigitNumber (this.getSeconds()); 

    return `${mins}:${secs}`; 
  }
}


