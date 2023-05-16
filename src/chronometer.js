class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start (printTimeCallback) {

    this.intervalId = setInterval(() => { 
      if (printTimeCallback) {
        printTimeCallback();}
        this.currentTime += 1;
   }, 1000);

  }

  getMinutes() {
    const Minutes = Math.floor(this.currentTime / 60);
    if (this.intervalId >= 0) {
    return Minutes;}
  }

  getSeconds() {
    const Seconds = Math.floor(this.currentTime % 60 % 60);
    if (this.intervalId >= 0) {
    return Seconds;}
  }
  

  computeTwoDigitNumber(value) {
    let TwoDigitNumber = "";
    if (value < 10) {
    TwoDigitNumber = `0${value}`;
    return TwoDigitNumber; 

  }
  return value.toString();
}



  stop() {
  clearInterval(this.intervalId);
  
  }

  reset() {

    this.stop();
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}
