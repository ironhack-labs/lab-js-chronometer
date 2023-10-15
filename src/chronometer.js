class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    // this.printTimeCallback = printTimeCallback;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
        this.currentTime++;
        if (this.printTimeCallback) {
            this.printTimeCallback(this.currentTime);
        }
      }, 1000);{
      }

  }

  getMinutes() {
    let minutGet = Math.floor(this.currentTime / 60);
    return minutGet;
  }

  getSeconds() {
    let secondGet = Math.floor(this.currentTime % 60);
    return secondGet;
  }

  computeTwoDigitNumber(value) {
    const myNumber = 3;

     function printTwoDigits(n) {
       if (n >= 2) {
       return '0' + n; 
     } else {
       return '' + n;
     }
  }
     const twoDigits = printTwoDigits(myNumber);
     return twoDigits;
  }

  stop() {
    clearInterval(this.currentTime);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
   let digitNewNumber = this.computeTwoDigitNumber.split('');
   function secondMinut () {
    return this.getMinutes()  + ":" + this.getSeconds();
   }
  }
}
