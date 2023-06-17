class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval((
    ) => {
      this.currentTime += 1;
      if(!printTimeCallback) {
        return 0;
      }
      printTimeCallback()
      }, 10)
  
  }

  getMinutes() {
    const minutesPassed = Math.floor(this.currentTime / 60 / 100 )
    return minutesPassed;
  }

  getSeconds() {
    return Math.floor(this.currentTime / 100) % 60;
  }

  getCentiseconds() {
    return this.currentTime % 100;
  }

  computeTwoDigitNumber(value) {
    const convertedValue = value.toString()
    if(convertedValue.length == 1) {
      return "0" + convertedValue.slice(0) ;
    }
    else
      return convertedValue;
    }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const currentSeconds = this.getSeconds();
    const currentMinutes = this.getMinutes();
    const currentCentiSeconds = this.getCentiseconds();
    let secondsString = currentSeconds.toString();
    let minutesString = currentMinutes.toString();
    let centiSecondsString = currentCentiSeconds.toString();
    minutesString = this.computeTwoDigitNumber(currentMinutes);
    secondsString = this.computeTwoDigitNumber(currentSeconds);
    centiSecondsString = this.computeTwoDigitNumber(currentCentiSeconds);
    const timeFormat = `${minutesString}:${secondsString}.${centiSecondsString}`;
    return timeFormat;


  }
}

