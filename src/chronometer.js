class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1
      if (printTimeCallback) printTimeCallback()
      console.log(this.currentTime)
    }, 1000)
  }

  getMinutes() {
  return Math.floor(this.currentTime/60)
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
    // retornar uma string
    if (value < 10) return `0${value}`
    return `${value}`
    // string dois dígitos
    // string menor que 10, colocar um zero na frente

  }

  stop() {
    return clearInterval(this.intervalId)
  }

  reset() {
   return this.currentTime = 0
  }

  split() {
    // iteração 1
    //retornar a string no time em que está
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}