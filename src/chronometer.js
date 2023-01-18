class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {

    /* should receive 1 argument (printTimeCallback)
should increment by 1 the currentTime property on every 1 second interval
should invoke the passed argument (printTimeCallback) every 1 second
should increment the currentTime property to 3 after 3 seconds */

    this.intervalId = setInterval(() => {
      this.currentTime++;
      if(printTimeCallback){
        return  printTimeCallback();
      }
    },1000)
 }

  

  getMinutes() {

    /* should return a number
should return a number without decimal places
should return the number of entire minutes passed
should return 0 when the chronometer hasn't been started
should return the number of minutes passed even after a very long time */

    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {

    /*should not receive any arguments
should return a number
should return 0 when the currentTime counting haven't started
should return the seconds of the currentTime
should return the seconds portion of the currentTime that remains after removing the minutes*/
  let seconds = this.currentTime % 60;
  return seconds;

  }

  computeTwoDigitNumber(value) {
    /* should receive 1 argument (value)
should return a string
should always return a string of length 2
should return '00' when the value is 0
should return '15' when the value is 15
Should return '03' when the value is 3*/
    if (value < 10) {
      return "0" + value;
        } else {
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

  return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }


}
