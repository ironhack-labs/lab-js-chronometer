class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId  = setInterval(() => {
      if(printTimeCallback){
        printTimeCallback()
      }
      this.currentTime++;
    }, 1000)
  }
    
  getMinutes() {
  let minutesToHours = this.currentTime/60;
  return Math.floor(minutesToHours);
  }

  getSeconds() {
   let minutesToSeconds = this.currentTime % 60;
   return minutesToSeconds;
  }

  computeTwoDigitNumber(value) {
    let str = value.toString();
    if (str.length === 2) {
      return str;
    } else {
      return "0" + str; 
    }
  }

  stop() {
    clearInterval(this.intervalId);

  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const getMinutes2DigitNumber = this.computeTwoDigitNumber(this.getMinutes());
    const getSeconds2DigitNumber = this.computeTwoDigitNumber(this.getSeconds());
    return `${getMinutes2DigitNumber}:${getSeconds2DigitNumber}`;
  }
}
