class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null; 
  
  }

  start(printTimeCallback){
    this.intervalId = setInterval(()=>{
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
    },1000)
    
  }

  getMinutes() {
    const minutes = this.currentTime / 60;
    let resultMinutes = Math.floor(minutes);
    return resultMinutes;
  }

  getSeconds() {
    const seconds = this.currentTime % 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
        return ("0" + value).slice(-2);
    
  
  }
  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.getMinutes();
    const seconds = this.getSeconds();
    const formattedMinutes = this.computeTwoDigitNumber(minutes);
    const formattedSeconds = this.computeTwoDigitNumber(seconds);
    return `${formattedMinutes}:${formattedSeconds}`;

  }
}