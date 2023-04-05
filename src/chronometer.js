class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    let tempString = "";
    tempString += value;
    if (tempString.length == 1) {
      tempString = "0" + tempString;
      return tempString;
    } else {
      return tempString;
    }

  }

  stop() {
    clearInterval(this.intervalId);
  }

  
  reset() {
    this.currentTime = 0;
  }

  split() {
    let currentTimeString = "" + this.currentTime;
    let minutesString = this.computeTwoDigitNumber(
      this.getMinutes(this.currentTime)
    );
    let secondsString = "";
    if (this.currentTime >= 60) {
      secondsString = this.computeTwoDigitNumber(
        this.getSeconds(this.currentTime)
      );
    } else if (currentTimeString.length === 2) {
      secondsString = currentTimeString;
    } else {
      secondsString = "0" + currentTimeString;
    }
    let totalString = minutesString + ":" + secondsString;
    return totalString;
  }

}
