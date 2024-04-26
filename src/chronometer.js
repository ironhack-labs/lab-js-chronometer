class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime =0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    if(typeof printTimeCallback!== "undefined"){
      this.intervalId=setInterval(()=> {this.currentTime++;
        printTimeCallback();},1000);
    }
    
  }

  getMinutes() {
    return Math.floor(this.currentTime/60);
    }

  getSeconds() {
    return this.currentTime%60;
  }

  computeTwoDigitNumber(value) {
    if(value <10){
      return `0${value}`;
    }
    else{
      return `${value}`;
    } 
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }

}
/*
const cron= new Chronometer();

cron.start(()=>{
  console.log(cron.computeTwoDigitNumber(cron.getSeconds()));
  //console.log(cron.getMinutes());
  //console.log(cron.getSeconds());

})
*/

//setTimeout(()=>{cron.stop()},7000);



//console.log(1%60);
//prom1.then(() => {setTimeout(()=>{cron.reset()},3000)}).then(()=>{cron.start(()=>{console.log(cron.currentTime)})})

