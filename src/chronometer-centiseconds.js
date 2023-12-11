class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    const callBackCenti = setInterval(()=>{
      this.currentTime += 1
      if(typeof printTimeCallback === "function"){
        printTimeCallback()
      }
    },10)
    this.intervalId = callBackCenti
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 100 / 60)
    return minutes
  }

  getSeconds() {
    let seconds = Math.floor((this.currentTime-this.getMinutes()*6000) / 100)
    return seconds
  }

  getCentiseconds() {
    let centiseconds = this.currentTime % 6000 % 100
    console.log(centiseconds)
    return centiseconds
  }

  computeTwoDigitNumber(value) {
    value = "0" + value;
    const twoDigits = value.slice(-2);
    return twoDigits;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const storedMinutes = this.getMinutes();
    const storedSeconds = this.getSeconds();
    const storedCentiseconds = this.getCentiseconds();

    const formattedTime =
      this.computeTwoDigitNumber(storedMinutes) +
      ":" +
      this.computeTwoDigitNumber(storedSeconds)+"."+this.computeTwoDigitNumber(storedCentiseconds);
      console.log(formattedTime)
    return formattedTime;
  }
}
