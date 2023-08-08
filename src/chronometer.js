class Chronometer 
{
  constructor() 
  {
   this.currentTime = 0;
   this.intervalId = null;
  }

  start(printTimeCallback) 
  {
    if(typeof printTimeCallback === 'function') 
    {
      this.intervalId = setInterval(() => {
        this.currentTime += 1;
        printTimeCallback(this.currentTime);
      }, 1000);
    } else {
      this.intervalId = setInterval(() => {
        this.currentTime += 1;
      },1000);
    }
  }


    getMinutes() 
    {
      return Math.floor(this.currentTime / 60);
    }
    
     
    getSeconds() {
      return this.currentTime % 60;
    }

    
  computeTwoDigitNumber(value) 
  {
    
      let stringVal = value.toString();
      
      // If the string length is less than 2, pad with '0'
      if (stringVal.length < 2) 
      {
        stringVal = '0' + stringVal;
      }
            return stringVal;
  }

  stop() {
    
    clearInterval(this.intervalId);
  }



  reset() {

    this.currentTime = 0;
  }

  split() {

    const minutes = this.currentTime.getMinutes;
    const seconds = this.currentTime.getSeconds;

    return `${minutes}:${seconds}`;
  }

}
