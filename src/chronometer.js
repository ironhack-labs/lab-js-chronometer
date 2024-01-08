class Chronometer {
  constructor() {
    this.currentTime=0
    this.intervalId=null
    // ... your code goes here
  }

  start(printTimeCallback) {
    // Set initial value to 1
    this.intervalId = setInterval(() => {
      if (printTimeCallback) {
        printTimeCallback(this.currentTime);
      }
      this.currentTime += 1; // Increment time after callback
    }, 1000);
  }

  getMinutes() {
  return Math.floor(this.currentTime/60)
  }

  getSeconds() {
    if (this.currentTime<=0) {
      return 0
    }
    if (this.currentTime <= 60) {
      
      return  Math.floor(this.currentTime % 60)   
    }

    return  Math.floor(this.currentTime % 60)

  }

   computeTwoDigitNumber(value) {
    let newString = value.toString();
  
    if (newString.length < 2) {
      newString = "0" + newString; // Agregar un cero al principio
    }
  
    return newString;
  }

  stop() {
   return clearInterval(this.intervalId)
   
  }

  reset() {
    this.currentTime=0
  }

  split() {
    let min = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    
    let resul = `${min}:${seconds}` 
    return resul
  }
}
