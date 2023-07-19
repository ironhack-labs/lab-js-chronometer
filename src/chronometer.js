

// ---------- [COMPLETED] ----------

class Chronometer {
  constructor() {
    // ... your code goes here

    this.currentTime = 0;
    this.intervalId = null;

    //console.log(this.currentTime) -- CONFIRM WHY GIVE US A BIG LIST
    // console.log(this.intervalId) -- CONFIRM WHY GIVE US A BIG LIST

  }

  // ---------- [COMPLETED] ----------




  // ---------- [COMPLETED] ----------

  start(printTimeCallback) {
    // ... your code goes here

    let currentTime = 0

    this.intervalId = setInterval(() => {

      this.currentTime += 1

      if (printTimeCallback) { // [QUESTION]: didn't understood what this does 

        printTimeCallback()

      }

      //console.log(`Han pasado ${currentTime} segundos`)
    }, 1000)

    //console.log(printTimeCallback)

  }

  // ---------- [COMPLETED] ----------





  // ---------- [COMPLETED] ----------

  getMinutes() {
    // ... your code goes here

    const minutesCounter = Math.floor(this.currentTime / 60)

    return minutesCounter

    //[ALTERNATIVE:] return Math.floor(this.currentTime / 60)
  }

  // ---------- [COMPLETED] ----------




  // ---------- [COMPLETED] ----------

  getSeconds() {
    // ... your code goes here

    if (this.currentTime === 0) {

      return 0

    } else {

      return Math.floor(this.currentTime % 60)
    }

  }

  // ---------- [COMPLETED] ----------




  // ---------- [NOT DONE] ----------

  computeTwoDigitNumber(value) {
    // ... your code goes here
  }

  // ---------- [NOT DONE] ----------




  // ---------- [IN PROGRESS] ----------

  stop() {
    // ... your code goes here

    const timeoutID = setTimeout(() => {

      if (setTimeout) { // [QUESTION]: didn't understood what this does 

        setTimeout()

      }
    })

  }

  // ---------- [IN PROGRESS] ----------




  // ---------- [NOT DONE] ----------

  reset() {
    // ... your code goes here
  }

  // ---------- [NOT DONE] ----------




  // ---------- [NOT DONE] ----------

  split() {
    // ... your code goes here
  }
}

// ---------- [NOT DONE] ----------
