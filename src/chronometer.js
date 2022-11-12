class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {

    setInterval(()=> {
      this.currentTime++;
      if (printTimeCallback===typeof("function")){
           printTimeCallback()}
     }, 1000);}


  getMinutes() {
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {

    if(value < 10 && value >0){
      return ("0" + value).slice(-2);
    }
    else if(value==0){
      return("00");
    }

    return value.toString();
  }

  stop() {
    clearInterval();
  }

  clearInterval(){
    this.intervalId = 0;
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let myMinutes = getMinutes();
    let mySeconds = getSeconds();
    let myTime = concat(computeTwoDigitNumber(myMinutes), ":", computeTwoDigitNumber(mySeconds));
    return myTime
  }
}
