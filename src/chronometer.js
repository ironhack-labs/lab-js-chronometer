class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    
  }

  start(printTimeCallback) {
    setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000)
    this.intervalId = this.currentTime

  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    const str = value.toString();
    if (str.length === 1) {
      return `0${str[0]}`;
    } else {
       return value.toString();
      }
  } 
  // Por favor indicarme como hacerlo con el metodo .slice() → GRACIAS

  stop() {
    clearInterval(this.currentTime);  
    this.intervalId = 0;     
    
  }

  reset() {

    this.currentTime = 0

  }

  split() {  
    
    return `${computeTwoDigitNumber(getMinutes())}:${computeTwoDigitNumber(getSeconds())}`;

  }
}
