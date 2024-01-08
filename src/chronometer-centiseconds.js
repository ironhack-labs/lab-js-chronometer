class Chronometer {
  constructor() {
    this.currentTime=0
    this.intervalId=null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      if (printTimeCallback) {
        printTimeCallback(this.currentTime);
      }
      this.currentTime += 1; // Increment time after callback
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime/6000)
  }

  getSeconds() {
    
   
    return Math.floor(this.currentTime/100)

  }

  getCentiseconds() {
    if (this.currentTime<=0) {
      return 0
    }
    if (this.currentTime <= 100) {
      
      return  Math.floor(this.currentTime % 100)   
    }

    return  Math.floor(this.currentTime % 100)

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
    let centiseconds= this.computeTwoDigitNumber(this.getCentiseconds())
    let resul = `${min}:${seconds}:${centiseconds}` 
    return resul
  }
}
