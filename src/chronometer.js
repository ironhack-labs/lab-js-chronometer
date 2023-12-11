class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }


  start(printTimeCallback) {

    this.intervalId = setInterval(() => {
      if (typeof printTimeCallback === 'function') {
        printTimeCallback(this.currentTime);
      }
      if (this.currentTime >= 3) {
        clearInterval(this.intervalId);
      } else {
        this.currentTime++
      }
    }, 1000);
  }  
  

  getMinutes() {

    const minutes = Math.floor(this.currentTime / 60);
    
    return minutes

  }

      

  getSeconds() {

    const seconds = this.currentTime % 60

    if (this.intervalId === null) {
      return seconds
    } else {
      return 0
    }
  }

  computeTwoDigitNumber(value) {
    let stringifiedTime = value.toString()
  
    if (stringifiedTime.length === 1) {
      stringifiedTime = '0' + stringifiedTime;
    }
  
    return stringifiedTime
  }
  

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let stringifiedMinutes = this.getMinutes().toString();
    let stringifiedSeconds = this.getSeconds().toString();

    if (stringifiedMinutes.length===1){
      stringifiedMinutes = '0' + stringifiedMinutes
    }

    if (stringifiedSeconds.length===1){
      stringifiedSeconds= '0' + stringifiedSeconds
    }

    let stringifiedTime = stringifiedMinutes + ':' + stringifiedSeconds

    return stringifiedTime
  }
}