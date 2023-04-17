class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    // ... your code goes here
  }

  start(printTimeCallback) {
    this.intervalId= setInterval(()=>{
    this.currentTime+=1
    if (printTimeCallback){
      printTimeCallback();
    }
    },10)// ... your code goes here
  }

  getMinutes() {
    return Math.floor(this.currentTime/6000); /// ... your code goes here
  }

  getSeconds() {
   return (Math.floor(this.currentTime/100))%60
   
    // ... your code goes here
  }

  getCentiseconds() {
    
    return  this.currentTime%100 
    
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    if (value === 0){
      return "0"+value.toString();
    }
else if(value <9){
  return "0"+value.toString();
}else {
    return value.toString();
  }

}

  stop() {
    clearInterval(this.intervalId);// ... your code goes here
  }

  reset() {
    return this.currentTime = 0;// ... your code goes here
  }

  split() {
   let minutes =  this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    let centiseconds = this.computeTwoDigitNumber(this.getCentiseconds());// ... your code goes here
  return `${minutes}:${seconds}.${centiseconds}`
  }}
