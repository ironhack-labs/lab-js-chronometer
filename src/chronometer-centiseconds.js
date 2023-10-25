// class Chronometer {
//   constructor() {
//     // ... your code goes here
//     this.currentTime = 0;
//     this.intervalId = null;
//   }

//   start(printTimeCallback) {
//     // ... your code her
//     console.log(this.currentTime);
//     this.intervalId = setInterval(() => {
//       this.currentTime += 1;
//       if (!printTimeCallback) {
//         return;
//       }
//       printTimeCallback(this.currentTime);
//     }, 10);
//     return this.currentTime;
//   }

//   getMinutes() {
//     // ... your code goes here
//     const theMinutesPassed = Math.floor(this.currentTime / 60);
//     return theMinutesPassed;
//   }

//   getSeconds() {
//     // ... your code goes here
//     const theSecondPassed = Math.floor(this.currentTime % 60);
//     return theSecondPassed;
//   }

//   getCentiseconds() {
//     // ... your code goes here
//     const centiseconds = this.currentTime * 10;
//     return centiseconds;
//   }

//   computeTwoDigitNumber(value) {
//     // ... your code goes here
//   }

//   stop() {
//     // ... your code goes here
//   }

//   reset() {
//     // ... your code goes here
//   }

//   split() {
//     // ... your code goes here
//   }
// }
