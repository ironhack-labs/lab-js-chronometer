class Chronometer {
  constructor() {
    this.currentTime=0;
    this.intervalId=null;
  }

  start(printTimeCallback) {
    if (this.intervalId === null) { // Evita crear múltiples intervalos si ya está corriendo
      this.intervalId = setInterval(() => {
        this.currentTime++;
        printTimeCallback(this);
      }, 10);
    }
  }

  getMinutes() {
    return Math.floor(this.currentTime/60)
  }

  getSeconds() {
    return Math.floor(this.currentTime / 100) % 60;
  }

  getCentiseconds() {
    return this.currentTime % 100;
  }

  computeTwoDigitNumber(value) {
    return Math.floor(value).toString().padStart(2, "0");
  }

  stop() {
    clearInterval(this.intervalId)
    this.intervalId = null;
  }

  reset() {
    this.stop()
    this.currentTime=0
  }

  split() {
    return this.getMinutes().toString().padStart(2,"0")+":"+this.getSeconds().toString().padStart(2, "0")+":"+this.getCentiseconds().toString().padStart(2,"0")    
  }
}
