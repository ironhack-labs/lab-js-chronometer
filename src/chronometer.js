class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    if (printTimeCallback) {
      this.intervalId = setInterval(() => {
        this.currentTime += 1;
        printTimeCallback();
      }, 1000);
    } else {
      this.intervalId = setInterval(() => {
        this.currentTime += 1;
      }, 1000);
    }
  }

 getMinutes() {
    if (this.currentTime === 0) {
      return 0;
    }
    return Math.floor(this.currentTime / 60);
  }

 getSeconds() {
    if (this.currentTime === 0) {
      return 0;
    }
    return this.currentTime % 60;
  }

computeTwoDigitNumber(value) {
  // If the value is 0, return '00'
  if (value === 0) {
    return '00';
  }
  
  // Convert the value to a string
  let strValue = value.toString();
  
  // If the string is only 1 character long, add a leading 0
  if (strValue.length === 1) {
    strValue = '0' + strValue;
  }
  
  // Return the string, which will always be 2 characters long
  return strValue;
}

  stop() {
    clearInterval(this.intervalId);
  }

 reset() {
    this.currentTime = 0;
  }

split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}
