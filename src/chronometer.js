class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {

    this.intervalId = setInterval(() => {
      this.currentTime++;
      if(typeof printTimeCallback === "function"){
        printTimeCallback();
      }
    }, 1000)

  }

  getMinutes() {
    const min = Math.floor(this.currentTime / 60);
    return min;
  }

  getSeconds() {
    const sec = Math.floor(this.currentTime % 60);
    return sec;
  }

  computeTwoDigitNumber(value) {

    let valueStr = value.toString();
    
    if(valueStr.length === 1){
      valueStr = "0" + valueStr;
    }

    return valueStr;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const min = this.computeTwoDigitNumber(this.getMinutes());
    const sec = this.computeTwoDigitNumber(this.getSeconds());
    const result = min + ":" + sec;

    return result;

  }
}
