class Chronometer {
  constructor() {
   this.currentTime = 0;
   this.intervalId = null;
  }

  start(printTimeCallback) {
  this.intervalId = setInterval(() => {
  this.currentTime++;

  if (typeof printTimeCallback === "function"){
    printTimeCallback();
  }
   }, 1000)
  }

  getMinutes() {
   return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
  //  value = this.currentTime.slice(-2);
   var returnvalue = value.toString(),output;
   if (returnvalue.length > 2){
    output = returnvalue.slice(-2);
   } else if(returnvalue.length < 2){
    output = '0'+returnvalue;
   }else{
    output = returnvalue;

   }

   return output;

  }
  
  stop() {
     clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
  }
}

