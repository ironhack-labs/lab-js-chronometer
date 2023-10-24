class Chronometer {

  constructor() {
    this.currentTime = 0;
    this.intervalId = null;

  }

  start(printTimeCallback) {
    
    this.intervalId = setInterval(() => {
    this.currentTime++; 

    if (printTimeCallback) {
      printTimeCallback();
    } 
    }, 1000)
  }


  getMinutes() {
    const totalSeconds = this.currentTime;

   const totalMinutes = Math.floor(totalSeconds / 60);
  return totalMinutes;
  }

  

  getSeconds() {
     
 // const minutes = Math.floor(this.currentTime / 60); 
  //const seconds = this.currentTime - minutes * 60; 

  const seconds = this.currentTime %60
  return seconds;
  }

  computeTwoDigitNumber(value) {
  
    if (value < 10) {
     return '0' + value;
    }  else {
  
      return value.toString();
    }
  }

  stop() {
    clearInterval(this.intervalId);

  }

  reset() {
    this.currentTime = 0;

  }

  split() {
  
    
  }
}
