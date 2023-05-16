class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      
      if(typeof printTimeCallback === 'function') {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    if (this.currentTime === 0) {
      return 0;
    }

    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here
    if (this.currentTime === 0) {
      return 0;
    }

    return Math.floor(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value === 0) {
      return '00';
    }

    if(value < 10) {
      return '0' + value.toString();
    }

    return value.toString();

  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    const minutes = Math.floor(this.currentTime / 60);
    const seconds = this.currentTime % 60;

    const resultMinutes = minutes.toString().padStart(2, '0');
    const resultSeconds = seconds.toString().padStart(2, '0');

    return `${resultMinutes}:${resultSeconds}`;
  }
}
