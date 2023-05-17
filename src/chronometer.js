class Chronometer {
  constructor() {
    this.currentTime = 0;   // Property to store the current time
    this.intervalId = null; // Property to store the interval ID
    
    // ... your code goes here
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      console.log(this.currentTime); 
    }, 1000);
    
    // ... your code goes here
  }

  getMinutes() {
    if (!this.intervalId) {
      return 0; // Return 0 if the chronometer hasn't been started
    }
    const minutes = Math.floor(this.currentTime / 60);
    return minutes;
    const myChronometer = new Chronometer();
myChronometer.start();  // Starts the chronometer

setTimeout(() => {
  const minutes = myChronometer.getMinutes();
  console.log(minutes);  // Output: Number of minutes passed
}, 5000);

const longTimePassed = 360000; // 360,000 seconds = 6,000 minutes
myChronometer.currentTime = longTimePassed;
const minutesAfterLongTime = myChronometer.getMinutes();
console.log(minutesAfterLongTime);  // Output: 6000
    // ... your code goes here
  }

  getSeconds() {
    if (!this.intervalId) {
      return 0; // Return 0 if the chronometer hasn't been started
    }

    const seconds = this.currentTime % 60;
    return seconds;
    
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0${value}`;
    }
    
    const myChronometer = new Chronometer();
console.log(myChronometer.computeTwoDigitNumber(0));   // Output: '00'
console.log(myChronometer.computeTwoDigitNumber(15));  // Output: '15'
console.log(myChronometer.computeTwoDigitNumber(3));   // Output: '03'
    // ... your code goes here
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
