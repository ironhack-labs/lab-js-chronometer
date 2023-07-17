class Chronometer {
  constructor() {
    // Current time
    this.currentTime = 0;
    // Interval Id
    this.intervalId = null;
  }

  start(printTimeCallback) {

    this.intervalId = setInterval(()=>{
        this.currentTime++;
        if(printTimeCallback){
          printTimeCallback();
        }
    }, 1000);

  }

  getMinutes() {
    return Math.floor((this.currentTime/60));
  }

  getSeconds() {
    return (this.currentTime%60);
  }

  computeTwoDigitNumber(value) {

    let newValue = "";
    if(value === 0){
        newValue = "00";
      }else if(value < 10){
        newValue += "0" + value.toString();
      }else{
        newValue = value.toString();
      }
      return newValue;
  }

  stop() {
    
    clearInterval(this.intervalId);

  }

  reset() {
    return this.currentTime = 0;
  }

  split() {
    return this.computeTwoDigitNumber(this.getMinutes()) + ":" + this.computeTwoDigitNumber(this.getSeconds());
  }
}
