class Chronometer {
  constructor() { //The class (constructor) should not take any arguments.
    // ... your code goes here
    this.currentTime = 0; //está correto, não mexer
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
      this.intervalId = setInterval(()=>{
      this.currentTime++;
      
      if(printTimeCallback){
        printTimeCallback();
      }
      
    }, 1000);
  }

  getMinutes() { //should not receive any arguments
    // ... your code goes here
    return Math.floor(this.currentTime/60); //minutes
    
  }

  getSeconds() {
    // ... your code goes here
    return (this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if(value < 10){ //está determinando os valores de 0 a 9, para acrescentar o 0 à frente
      return "0" + value;
    } 
    else{
      return `${value}`; //value transformado em string
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
  }
}
