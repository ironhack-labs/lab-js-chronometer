class Chronometer {

  constructor(currentTime = 0, intervalId = null) {
    this.currentTime = currentTime
    this.intervalId = intervalId
  }




  start(printTimeCallback) {
    this.intervaId = setInterval(() => {

      this.currentTime++;

      if (printTimeCallback) {

        printTimeCallback()

      }
    }, 1000)
  }



  getMinutes() {

    

    /* let num = this.currentTime / 60

    num = Math.floor(num)

    return num */

    return Math.floor(this.currentTime / 60)

  }



  getSeconds() {

  
    let num = this.currentTime % 60

    return num

   

  }


  computeTwoDigitNumber(value) {

    let string = String(value)

    if (string.length < 2) {

      return "0" + string

    } else {

      return string

    }

  }




  stop() {

    
    clearInterval(this.intervaId)

  }



  reset() {

   

    this.currentTime = 0

  }




  split() {

    // ... your code goes here

    /*  let min = this.computeTwoDigitNumber(this.getMinutes())

     let seconds = this.computeTwoDigitNumber(this.getSeconds())

     return  min + ":" + seconds */




    return this.computeTwoDigitNumber(this.getMinutes()) + ":" + this.computeTwoDigitNumber(this.getSeconds())

  }

}

