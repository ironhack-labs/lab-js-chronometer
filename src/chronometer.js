class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    if(this.currentTime < 3){
      setInterval(()=>{
        if(printTimeCallback){
          printTimeCallback()
        }
        this.currentTime++;
      }, 1000)
    } if (this.currentTime > 3){
      setInterval(()=>{
        this.currentTime += 3;
      }, 3000)
  } 
}
  

  getMinutes() {
    const minutes = Math.floor(this.currentTime/60);
    return minutes;
  }

  getSeconds() {
    const seconds = Math.floor((this.currentTime) % 60);
    return seconds;
  }

  computeTwoDigitNumber(value) {
    if(value < 10){
      return (`0${value}`)
    } if (value > 10)  {
      return (`${value}`)
    }
  }

  stop() {
    clearInterval(this.currentTime)
  }

  reset() {
    this.currentTime = 0;
  }

  split(){
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
  }
