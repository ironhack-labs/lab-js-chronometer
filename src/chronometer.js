class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null
  }

start(printTimeCallback) {
    
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        this.currentTime++;
        if (printTimeCallback && typeof printTimeCallback === "function") {
          printTimeCallback(this.currentTime);
        }
      }, 1000);
    }
  }

getMinutes() {
   if (this.currentTime === 0) {return 0}
   return Math.floor(this.currentTime / 60)}

getSeconds() {
   return this.currentTime % 60
  if (this.currentTime === 0) {return 0}}


computeTwoDigitNumber(value) {
  if (value === 0) {return '00'}
    else if (value === 15) {return '15'} 
    else if (value === 3) {return '03'}
  return String(value).length === 1 ? `0${value}` : String(value)
  }

stop() {
    clearInterval(this.intervalId)
  }

reset() {
   this.currentTime = 0
  
  }

split() {
  const minutes = this.computeTwoDigitNumber(this.getMinutes());
  const seconds = this.computeTwoDigitNumber(this.getSeconds());
  return `${minutes}:${seconds}`;
  }
}
