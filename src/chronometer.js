class Chronometer {
  constructor() {
    // ... your code goes here

    /*The class (constructor) should not take any arguments.
    The class (constructor) should initialize two properties for each new chronometer object:
    currentTime, with the initial value set to 0.
    intervalId, with the initial value set to null. */

    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {

    /*should be declared on the Chronometer class
      should receive one argument (printTimeCallback)
      should increment by 1 the currentTime property every 1 second
      should invoke the passed printTimeCallback every 1 second */

     this.intervalId = setInterval(() => {
      if(printTimeCallback){
        printTimeCallback()
      }
      this.currentTime++
      },1000)
  }

  getMinutes() {
   
    /*should be declared on the Chronometer class
      should not receive any arguments
      should return the number of entire minutes passed */

    let minutes = Math.floor(this.currentTime / 60) ;
    return minutes;
  }

  getSeconds() {
    let seconds = this.currentTime % 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    /*should be declared on the Chronometer class
      should receive one argument (value)
      should return a string
      should always return a string of length 2 
  */

    if (value < 10) {
return "0"+value;
    }
    else {
      return value.toString();
    }
  }

  stop() {
    /*should be declared on the Chronometer class
      should not receive any arguments
      should call clearInterval
      should clear the existing interval timer */
      clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    /*should be declared on the Chronometer class
      should not receive any arguments
      should return a string
      should return a string showing the minutes and seconds in the "mm:ss" format */

      let seconds = this.computeTwoDigitNumber(this.getSeconds());
      let minutes = this.computeTwoDigitNumber(this.getMinutes());


    return `${minutes}:${seconds}`;
  }
}
