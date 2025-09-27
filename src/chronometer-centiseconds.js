class Chronometer {
	constructor() {
		// ... your code goes here
		this.currentTime = 0
		this.intervalId = null
	}

	start(printTimeCallback) {
		// ... your code goes here

		this.intervalId = setInterval(() => {
			this.currentTime++
			if (printTimeCallback) {
				printTimeCallback(this.currentTime)
			}
		}, 10)
	}

	getMinutes() {
		// ... your code goes here
		return Math.floor(this.currentTime / 6000)
	}

	getSeconds() {
		// ... your code goes here
		return Math.floor((this.currentTime % 6000) / 100)
	}

	getCentiseconds() {
		return this.currentTime % 100
	}

	computeTwoDigitNumber(value) {
		// ... your code goes here

		return `${value.toString().padStart(2, '0')}`
	}

	stop() {
		// ... your code goes here
		clearInterval(this.intervalId)
	}

	reset() {
		// ... your code goes here
		this.currentTime = 0
	}

	split() {
		// ... your code goes here
		console.log(
			`${this.getMinutes()}:${this.getSeconds()}.${this.getCentiseconds()}`
		)
		return `${this.computeTwoDigitNumber(
			this.getMinutes()
		)}:${this.computeTwoDigitNumber(
			this.getSeconds()
		)}.${this.computeTwoDigitNumber(this.getCentiseconds())}`
	}
}
