class Chronometer {
  constructor() {
    // ... your code goes here   ****horacio leon
  this.currentTime =0
  this.intervalId =null
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId=setInterval(()=>{
      this.currentTime += 1; //should increment by 1 the currentTime property every 1 second
      printTimeCallback()
    },1000)
  }

  getMinutes() {
    // ... your code goes here
    //should not receive any arguments
    //should return the number of entire minutes passed
    return Math.floor(this.currentTime/60);
    
  }

  getSeconds() {
    // ... your code goes here
    //should not receive any arguments
    //should return the number of entire seconds passed
    return (this.currentTime%60)
  }

  computeTwoDigitNumber(value) {
    
    // 33 -> '33'
    // 3 -> '03'
    // 333 -> '333'

    // ... your code goes here
    //should return a string    return value.length.toFixed(2)
    //should always return a string of length 2
    //value() => {
      //chronometer.computeTwoDigitNumber=computeTwoDigitNumber
      // return this.getMinutes.toString()
      // return this.getSeconds.toString()

      
      // [getMinutes,getSeconds]
    //value.slice(0,2)****




    // return String(value).padStart(2, '0');
    return value.toString().padStart(2, '0');

    // if (value<10) { // String(value).length
    //   // return `0${value}`;
    //   return [0, value].join('');
    // }

    // return value

    // return value<10 ? [0, value].join('') : value;
    //********return value<10 ? `0${value}` : value;*******
  }

  stop() {
    // ... your code goes here
  clearInterval(this.intervalId)
}

  reset() {
    // ... your code goes here
    return 
  }

  split() {
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
