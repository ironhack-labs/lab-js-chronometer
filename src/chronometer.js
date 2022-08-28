class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value < 10) {
      return "0" + value;
    }
    // return `${value}`;
    return "" + value;
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    console.log("----------SPLIT-------------");

    // "mm:ss"
    let minutos = this.getMinutes();
    let segundos = this.getSeconds();

    let minutosFormateados = this.computeTwoDigitNumber(minutos);
    let segundosFormateados = this.computeTwoDigitNumber(segundos);
    console.log(minutosFormateados);
    console.log(segundosFormateados);

    console.log("----------------------------");
    let yaFormateado = minutosFormateados + ":" + segundosFormateados;
    console.log(yaFormateado);
    return yaFormateado;
  }
}
