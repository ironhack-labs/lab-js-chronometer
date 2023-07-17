class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      if (printTimeCallback) {
        printTimeCallback();
      }
      this.currentTime++;
      console.log(this.currentTime);
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return Math.floor(this.currentTime%60)
  }

  computeTwoDigitNumber(value) {
    const stringOfNumbers = String(value);
    if (stringOfNumbers.length===1){
     return "0" +stringOfNumbers;
    }
    return stringOfNumbers
   }


  stop() {
    clearInterval(this.intervalId)
  }




  reset() {
   this.currentTime = 0
  }

  split() {
  

    const formattedMinutes = this.computeTwoDigitNumber(this.getMinutes());
    const formattedSeconds = this.computeTwoDigitNumber(this.getSeconds());

    return `${formattedMinutes}:${formattedSeconds}`;
  }
  }



  // Note for T.A. : my code is right according to Jasmine but my watch isnt working when i hit the live server