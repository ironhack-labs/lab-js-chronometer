class Chronometer {
  constructor()
   {
    this.currentTime = 0;
    this.intervalId  = null;
  }
  start(printTimeCallback) {
      this.intervalId = setInterval(() => {
      this.currentTime++
      if (printTimeCallback) printTimeCallback ()},1000)
    
  }

  getMinutes() {
   return Math.floor(this.currentTime/60)
  }
  getSeconds(){
  if (this.currentTime === 0){
    return 0;
  } else {
  return this.currentTime % 60
  }
}

  computeTwoDigitNumber(value) {
    return value.toString().padStart(2, 0)
  }

  stop(){
    let clear= this.intervalId;
    clearInterval(clear)
  }

  reset() {
   this.currentTime = 0; 
  }

  split() {
    // ... your code goes here
  }
}
