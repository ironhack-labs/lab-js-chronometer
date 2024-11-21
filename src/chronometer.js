class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.intervalIdCS = null;
    this.centiSeconds = 0;
  }


  start(printTimeCallback) {
    //console.log(printTimeCallback);
    if(printTimeCallback!=="" && printTimeCallback!==undefined){
      
      this.intervalIdCS = setInterval(()=>{
        if(this.centiSeconds===99){
          this.centiSeconds = 0;
         }
         this.centiSeconds += 1;
         //console.log(this.centiSeconds);
         printTimeCallback(this.centiSeconds);
       }, 10);

      this.intervalId = setInterval(()=>{
        this.currentTime += 1;
        printTimeCallback(this.currentTime);
      }, 1000);

    }
  }

  getMinutes() {
    //console.log("get minutes", Math.floor(this.currentTime/60));
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  getCentiseconds(){
    //console.log('get centiseconds', this.currentTime / 100);
    return this.centiSeconds;
  }

  computeTwoDigitNumber(value) {
    if(value>9){
      return value.toString();
    }else{
      return `0${value}`;
    }
 }

  stop() {
    clearInterval(this.intervalId);
    clearInterval(this.intervalIdCS);

  }

  reset() {
    this.currentTime = 0;
    this.centiSeconds = 0;
  }
}
