class Chronometer {
  constructor() {
     this.currentTime = 0;
     this.intervalId = null;
  }
  

  start(printTimeCallback) {
    let i = 1;
    if(printTimeCallback == 'printTimeCallback'){
      this.intervalId = setInterval(() => {
        this.currentTime = i;
        console.log(i);
        i++;
      },1000)
    }else{
      this.intervalId = setInterval(() => {
        this.currentTime = i;
        i++;
      },1000)
    }  
  }

  getMinutes() {
    let minutes = 0;
    if(this.currentTime > 0){
      minutes = Math.trunc(this.currentTime/60)
    }else if(this.currentTime >= 0 && this.currentTime < 60){
      return this.currentTime;
  }
    return minutes;
  }

  getSeconds() {
    let second = 0;
    if(this.currentTime > 0){
      second = this.currentTime%60;
    }
    return second;
  }

  computeTwoDigitNumber(value) {
    let result = '00';
    if (value < 10 && value >= 0){
      return result = '0'+ value.toString();
    }else if(value >= 10 && value <= 60){
      return value.toString()
    }
    return result;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let min = this.getMinutes();
    let sec = this.getSeconds();
    let format = '00:00';
    if(min > 0 || sec > 0){
      return format = this.computeTwoDigitNumber(min)+':'+this.computeTwoDigitNumber(sec);
    }
    return format;
  }
}
