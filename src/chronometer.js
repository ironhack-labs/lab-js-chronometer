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
      }, 1000)
  
  }

  getMinutes() {
    const minutesPassed = Math.floor(this.currentTime / 60 )
    return minutesPassed;
  }

  getSeconds() {
    return this.currentTime % 60;
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
    let secondsString = currentSeconds.toString();
    let minutesString = currentMinutes.toString();
    minutesString = this.computeTwoDigitNumber(currentMinutes);
    secondsString = this.computeTwoDigitNumber(currentSeconds);
    const timeFormat = `${minutesString}:${secondsString}`;
    return timeFormat;


  }
}
