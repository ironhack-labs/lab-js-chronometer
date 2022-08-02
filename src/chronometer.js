class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback){
  this.intervalId = setInterval(()=>
  this.currentTime += 1
  ,1000)
 /* function stringRetorned(){
    return printTimeCallback
  }*/ 
  }

  getMinutes() {
    const minuntesCurrent = Math.floor(this.currentTime / 60)
    return minuntesCurrent
  }

  getSeconds() {
    const secondsCurrent = this.currentTime % 60
    return secondsCurrent
  }

  computeTwoDigitNumber(value) {
    let arr = []
    if(value === 0 || value === 1 ||value === 2 || value === 3 || value === 4 || value === 5 || value === 6 || value === 7 || value === 8 || value === 9){
      arr = [0]
      arr.push(value)
    }else{
      arr.push(value)
    }
    let twoDigitNumber = arr.join('')
    return twoDigitNumber
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
   let minutes = this.computeTwoDigitNumber(this.getMinutes())
   let seconds = this.computeTwoDigitNumber(this.getSeconds())
   let arr1 = []
   arr1.push(minutes,seconds)
   let format = arr1.join(':')
   return format
  }
}
