class Chronometer 
{
  currentTime = 0;
  intervalId = null;

  constructor(){}

  start(printTimeCallback) 
  {
    if(this.intervalId === null)
    {
      this.intervalId = setInterval(() => 
      {
        if(typeof printTimeCallback === "function")
        {
          printTimeCallback();
        }
  
        this.currentTime++;
  
      }, 10);
    }
  }

  getMinutes() 
  {
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() 
  {
    return Math.floor((this.currentTime / 100) % 60);
  }

  getCentiseconds() 
  {
    return this.currentTime % 100;
  }

  computeTwoDigitNumber(value) 
  {
    return String(value).length === 1 ? `0${String(value)}` : String(value);
  }

  stop() 
  {
    clearInterval(this.intervalId);
  }

  reset() 
  {
    return this.currentTime = 0;
  }

  split() 
  {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}.${this.computeTwoDigitNumber(this.getCentiseconds())}`
  }
}
