class Chronometer {
  constructor() {
  this.currentTime=0;
  this.intervalId=null;   
  }

  start(printTimeCallback) {
    this.intervalId=setInterval(() => {
      this.currentTime++;
      if(printTimeCallback){
        printTimeCallback();
      }
        },1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    let rest=this.currentTime%60;
    return rest;
    
  }

  computeTwoDigitNumber(value) {
    if(value=="0")
     { return `00`;}
      else if (value>0 && value<10){
        return `0${value}`;
      }
      else
      {return `${value}`;}
    
  }

  stop() {
      clearInterval(this.intervalId);
  }

  reset() {
    return this.currentTime=0;
  }

  split() {
    let min=this.getMinutes();
    let sec=this.getSeconds();
    let finalTimeMin=this.computeTwoDigitNumber(min);
    let finalTimeSec=this.computeTwoDigitNumber(sec);

    return `${finalTimeMin}:${finalTimeSec}`;
  }
}