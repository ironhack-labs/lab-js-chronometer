class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    
    this.intervalId = setInterval(() => {

      if( typeof printTimeCallback === "function") {            
        printTimeCallback ();
        };
      this.currentTime ++;
      

    }, 10 );  
  }

  getMinutes() {
    return Math.floor ( this.currentTime / 60 );
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  getCentiseconds() {
    return ( this.currentTime - Math.floor ( this.currentTime / 60 ) * 60 - this.currentTime % 60 ) / 100 ;
  }

  computeTwoDigitNumber(value) {
    this.value=value;    

    let valueInstring = (this.value / 100).toFixed(2)

       return valueInstring.slice(2,3);
  }

  stop() {
    clearInterval();
  }

  reset() {
    this.currentTime=0;
  }

  split() {

    return computeTwoDigitNumber( getMinutes ) + ":" + computeTwoDigitNumber(getSeconds);

  }
}
