class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback){
        printTimeCallback()
      };
    }, 1000);
  }

  getMinutes() {
    const numberOfMinutes = Math.floor(this.currentTime / 60);
    return numberOfMinutes;
  }

  getSeconds() {
    const numberOfSeconds = this.currentTime % 60 ;
    return numberOfSeconds;
  }

  computeTwoDigitNumber(value) {
    const finalValue = value.toString()
    if (finalValue.length < 2){
      return `0${finalValue}`;
    } else if (finalValue.length > 2) {
      return finalValue.slice(0,5) ;
    } else {
      return finalValue;
    } 
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const lastValue1 =this.computeTwoDigitNumber(this.getMinutes());
    const lastValue2 =this.computeTwoDigitNumber(this.getSeconds());
    return `${lastValue1}:${lastValue2}`
  }
}
