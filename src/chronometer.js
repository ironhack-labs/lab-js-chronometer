class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
   
  setInterval(() => {this.currentTime++;
  
  if(printTimeCallback){
    printTimeCallback()
  }
  
},1000); 
 
    
}




  getMinutes() {
  
   let minutos = Math.floor(this.currentTime / 60);
   return minutos;



  }

  getSeconds() {
    
    let segundos = Math.floor(this.currentTime % 60);
    return segundos;



  }

  computeTwoDigitNumber(value) {

    if (value >= 0 && value <10){
      return `0${value}`
    }
    else if (value >10){
      return `${value}`
    }


  }

  stop() {
    clearInterval(this.currentTime);

  }

  reset() {
    this.currentTime = 0;

  }

  split() {

let minutos = this.computeTwoDigitNumber(this.getMinutes());
let segundos = this.computeTwoDigitNumber(this.getSeconds());


   return `${minutos}:${segundos}`;
  }
}
