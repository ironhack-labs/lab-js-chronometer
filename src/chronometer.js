class Chronometer {
  
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    // ... your code goes here
  }

  start(printTimeCallback) {
  this.intervalId =  setInterval(() => {
      if (printTimeCallback)  printTimeCallback()
      this.currentTime +=1
  
  }, 1000)
 
  }

  getMinutes() {
    if (this.currentTime === 0){return 0}
    let inMin = this.currentTime/60
    let ffloor = Math.floor(inMin)
    
    return ffloor
  }

  getSeconds() {
    if (this.currentTime === 0){return 0}
    let remain =  this.currentTime % 60

    return remain
  }

  computeTwoDigitNumber(value) {

    let pad = '0'
    let newVal = value.toString()
    if (newVal.length === 1)  {
      pad += newVal
    }
    if (newVal.length === 2){
      pad = newVal
    }

  return pad
  }

  stop() { 

    clearInterval(this.intervalId)  
    // ... your code goes here
  }

  reset() {
    this.currentTime=0
    // ... your code goes here
  }

  split() {
    let min = this.getMinutes(this.currentTime)
    let mmin = this.computeTwoDigitNumber(min)

    let sec = this.getSeconds(this.currentTime)
    let ssec = this.computeTwoDigitNumber(sec)

    result = `${mmin}:${ssec}`

    return result

    // ... your code goes here
  }
}


