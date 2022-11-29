class Chronometer {
  constructor() {

    this.currentTime = 0;
    this.intervalId = null;

  }

  start( printTimeCallback ) {

    this.intervalId = setInterval(() => {

       if( typeof printTimeCallback === "function") {            
           printTimeCallback ();
      };
       this.currentTime ++;

    }, 1000 );     
    
  }
 

  getMinutes() {

    return Math.floor ( this.currentTime / 60 );

  }

  getSeconds() {

    return this.currentTime % 60;

  }

  computeTwoDigitNumber(value) {

    this.value=value;    

    let valueInstring = (this.value / 100).toFixed(2)

       return valueInstring.slice(2,4);

    
  }

  stop() {

    clearInterval();

  }

  reset() {

    this.currentTime=0;

  }

  split() {
    
    return computeTwoDigitNumber(getMinutes) + ":" + computeTwoDigitNumber(getSeconds);
    }
  }

