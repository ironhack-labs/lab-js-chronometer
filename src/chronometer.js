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
          printTimeCallback()
        }

        this.currentTime++;
  
      }, 1000)
    }
  }

  getMinutes() 
  {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() 
  {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) 
  {
    return String(value).length === 1 ? `0${String(value)}` : String(value)
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
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}
