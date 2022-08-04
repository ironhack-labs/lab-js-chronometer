class Chronometer {
  constructor() {

    this.currentTime = 0 ;
    this.intervalId = null;
  }

  start(printTimeCallback) {
   
    
    this.intervalId = setInterval( () => {
       this.currentTime++

       if(printTimeCallback){
        printTimeCallback()
       }
    }, 1000) 

    
  }

  getMinutes() {
   
   let numberOfMinutes = Math.floor(this.currentTime / 60);
   return numberOfMinutes;
  }

  getSeconds() {
   

    let numberOfSeconds = Math.floor(this.currentTime % 60);
    return numberOfSeconds;
  }

  computeTwoDigitNumber(value) {
   
    
    if(value < 10){
      return '0' + value;
    } 
      return `${value}`    // ' ' + value
    
     
  }

  stop() {
   
    clearInterval(this.intervalId);
  }

  reset() {
   
       this.currentTime = 0;
  }

  split() {
    let mm = this.getMinutes();
    let ss = this.getSeconds();
     
    let computeMinutes = this.computeTwoDigitNumber(mm);
    let computeSeconds = this.computeTwoDigitNumber(ss)
    // return `03:45`
    return `${computeMinutes}:${computeSeconds}`
  }
}



