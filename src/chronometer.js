

class Chronometer {
  constructor() {
this.currentTime = 0;
this.intervalId = null
  }

  start(printTimeCallback) {
//use an arrow function 

this.intervalId = setInterval(() => {
  this.currentTime++ ;
  if (typeof printTimeCallback === 'function'){
    printTimeCallback()}
}, 1000);
}

  getMinutes() {
    return Math.floor(this.currentTime / 60)  ; 
    }

  getSeconds() {
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
       
    if (value < 10){
       return '0' + value.toString();
     } else  {
      return value.toString();
     } 
     }   

  stop() {
    clearInterval(this.intervalId)
  }

  reset() { 
    this.currentTime = 0
  }

  split() {
    this.getMinutes()
    this.getSeconds()
    this.computeTwoDigitNumber()
    return `${this.getMinutes()} ":" ${this.getSeconds()}`
  }
}
