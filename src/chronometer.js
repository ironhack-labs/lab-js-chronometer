class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime ++;
    }, 1000);
   
    return printTimeCallback;
  }
    //for (this.currentTime = 0; this.currentTime < 1000; i++);
  //hay que ponerle que cada vez que se muestre con el temporizador se incremente en 1
 //elclearInterval se puede ejecutar en un if

  getMinutes() {
    if (this.currentTime === 0) {
      return 0;
    } else {
      return Math.floor(this.currentTime / 60);
    }
  }

  getSeconds() {
    if (this.currentTime === 0){
      return 0;
    } else{
      return this.currentTime % 60;
    }
  }

  computeTwoDigitNumber(value) {
    return value < 10 ? `0${value}` : `${value}`;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
  }
}
