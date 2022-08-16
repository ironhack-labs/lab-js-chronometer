class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if(printTimeCallback) { //preguntamos si recibe un valor
        printTimeCallback(); //para poder llamarla
      }
      
    }, 1000);
    //console.log(interval1);
  }


  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
    }

  computeTwoDigitNumber(value) {
    let numToText = value.toString();
    if (numToText.length == 1) {
      return "0" + numToText
    }
      return numToText;
  }
  /* Otra manera:
  if (value < 10) {
    return "0" + value;
  }
  return "" + value;
}

*/
  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const mins = this.getMinutes();
    const secs = this.getSeconds();
    console.log("Minutos y segundos", this.computeTwoDigitNumber(mins), this.computeTwoDigitNumber(secs));
    return (this.computeTwoDigitNumber(mins) + ":" + this.computeTwoDigitNumber(secs));
  }
}
