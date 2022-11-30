class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);
    
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    this.value = value
    if (this.value = 0) {
      return '00';
    }
    else if (this.value < 10) {
      return '0' + value;
    }
    else {
      return value ;
    }
    
    
  }
    
  stop() {
    clearInterval(this.intervalId)

  }

  reset() {
    return this.currentTime = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSconds());

    return `${minutes}:${seconds}`;
  }
}
