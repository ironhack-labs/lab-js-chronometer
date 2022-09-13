class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }


  start(printTimeCallback) {
    
      this.intervalId = setInterval(() => {
        this.currentTime += 1;
        if(typeof printTimeCallback === 'function'){
          printTimeCallback();  
        }  
      },10);   
  }

  getMinutes() {
    return Math.floor((this.currentTime/100)/60);
  }

  getSeconds() {
    return Math.floor((this.currentTime/100) % 60);
  }

  getCentiseconds() {
    return Math.floor((this.currentTime % 6000)%100);
    
  }

  computeTwoDigitNumber(value) {
    let strValueCopy = value.toString();
    if(strValueCopy.length === 1){
      let strValue = "0"+strValueCopy;
      return strValue;
    }else{
      return strValueCopy;
    }  
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds =  this.computeTwoDigitNumber(this.getSeconds());
    let centiSeconds = this.computeTwoDigitNumber(this.getCentiseconds());
    return minutes+':'+seconds+'.'+ centiSeconds;
  }
}
