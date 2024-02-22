class Chronometer {
  constructor(currentTime = 0, intervalId = null) {
    this.currentTime = currentTime;
    this.intervalId = intervalId;
  }

  start(printTimeCallback) {
    
    this.intervalId = setInterval(() => {
      this.currentTime += 1
      if (printTimeCallback) printTimeCallback()
      //console.log('id',this.intervalId,'time',this.currentTime)
    },10)
  }
  stop() {
    clearInterval(this.intervalId)
  }
  getMinutes() {
    return Math.floor(this.currentTime / 6000)
  }
  getSeconds() {
    return Math.floor((this.currentTime / 100) % 60)
  }
  getCentiseconds() {
    return Number(this.currentTime.toString().slice(-2))
  }
   computeTwoDigitNumber(number) {
    return number.toString().padStart(2,0)
  }
  reset() {
    this.currentTime = 0
  }
  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes(this.currentTime))}:${this.computeTwoDigitNumber(this.getSeconds(this.currentTime))}.${this.computeTwoDigitNumber(this.getCentiseconds(this.currentTime))}`
  }
}


const mins = (1000 / 1000)

const mins2 = 1000  / 1000

// 2627 = 26 seconds

// 5590 = 55 seconds

const aMin = 6887 // = 1 minute + sth

let factor = 100 * 60

const truncMins = aMin / 6000

const truncsecs = Math.floor(aMin / 100 % 60)