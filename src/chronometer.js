class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

// This function starts a setInterval that increments the currentTime by 1 every second
// and calls the passed in printTimeCallback function with the updated currentTime
start(printTimeCallback) {
  // If the passed in argument is not a function, set it to an empty function
  if (typeof printTimeCallback !== 'function') {
    printTimeCallback = () => {};
  }
  // Set an interval to increment currentTime and call the printTimeCallback every second
  this.intervalId = setInterval(() => {
    this.currentTime++;
    printTimeCallback(this.currentTime);
  }, 1000);
}

getMinutes() {
  // Divide the current time by 60 to get the number of minutes
  // Use Math.floor() to round down to the nearest whole number
  return Math.floor(this.currentTime / 60);
}

getSeconds() {
  // Use the modulo operator to get the remaining seconds
  return this.currentTime % 60;
}
computeTwoDigitNumber(value) {
  //Convert the value to string
  let strValue = value.toString();
  // Check the length of the string
  if (strValue.length < 2) {
    // If it's less than 2, add 0 before it
    strValue = "0" + strValue;
  }
  return strValue;
}

stop() {
  // Clears the interval with the id stored in the intervalId property
  clearInterval(this.intervalId);
}

reset() {
  // Reset the current time to 0
  this.currentTime = 0;
}

  split() {
    // ... your code goes here
  }
}
