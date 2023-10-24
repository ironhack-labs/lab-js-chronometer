class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {

    if(typeof printTimeCallback === 'function'){
      this.intervalId = setInterval(()=>{
        this.currentTime++;
        printTimeCallback(this.currentTime);
      },1000)
    }

  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
      // ... your code goes here
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let val = value.toString();
    if(val.length < 2)
    {
      val = '0' + val;
    }
    return val;
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
    let minute = this.getMinutes().toString();
    let second = this.getSeconds().toString();

    if(minute < 2)
    {
      minute = '0' + minute
    }
    if(second < 2)
    {
      second = '0' + second
    }
    return `${minute}:${second}`
  }
}
