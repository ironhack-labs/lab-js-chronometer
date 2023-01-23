class Chronometer {
  constructor() {
  this.currentTime=0;
  this.intervalId=null;
  }
/////////////////////////////////////////////////////////////////
  start(printTimeCallback) {

let contadorM=0;
let contadorS=0;
setInterval(()=> {
   this.currentTime++
    if(contadorS<3){
    }  if( contadorM==0){

    }
   }, 1000);
  }
/////////////////////////////////////////////////////////////
getMinutes() {

var resul=this.currentTime/60;
var result=Math.floor(resul);
return result;
}

  getSeconds() {
   var result=this.currentTime%60;
   return result;
  
  }

  computeTwoDigitNumber(value) {
    var str = value.toString(); 
    if(value<10){
      return 0+str ;
  }else{
      return str;
  }

  }

  stop() {
        clearInterval(Chronometer)
      
      }
  
  

  reset() {
  this.currentTime=0;
  }

  split() {
   
 let time= new Date(this.getMinutes()+ ":" +[this.getSeconds()]);
 return time;
  }
  }
