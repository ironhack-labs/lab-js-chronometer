
    class Chronometer {
      constructor() {
        this.currentTime = 0;
        this.intervalId = null;
      }
    }

  start(printTimeCallback) {
      const intervalCallback = function() {
        this.currentTime++;
        if (printTimeCallback && typeof printTimeCallback === 'function') {
          printTimeCallback();
        }
      };
  
      if (printTimeCallback && typeof printTimeCallback === 'function') {
        this.intervalId = setInterval(intervalCallback.bind(this), 1000);
      } else {
        this.intervalId = setInterval(intervalCallback.bind(this), 1000);
      }
    }

  getMinutes(){
      return Math.floor(this.currentTime / 60);
    }
  


  getSeconds() {
      return this.currentTime % 60;
    }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  }

  stop() {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  
  reset() {
      this.currentTime = 0;
    }
  

  split() {
    // ... your code goes here
  }

