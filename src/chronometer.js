class Chronometer {
  constructor() {
    this.currentTime=0
    this.intervalId=null
  }

  start(printTimeCallback) {
    this.intervalId=setInterval(()=>{
      this.currentTime+=1 
      if(printTimeCallback)
      {
        printTimeCallback()
      }
     
    },1000)
  }

  getMinutes() {
    return (Math.floor(this.currentTime/60))
  }

  getSeconds() {
    return (this.currentTime%60)
  }

  computeTwoDigitNumber(value) {
    value=`${value}`
    if(value.length==1)
    {
      return `0${value}`
    }
    else if(value.length===0){
      return "0"+"0"
    }
    else{
      return value
    }
     
    
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime=0
  }

  split() {
    let minute=this.computeTwoDigitNumber(this.getMinutes())
    let seconds=this.computeTwoDigitNumber(this.getSeconds())

    return `${minute}:${seconds}`
  }
}
