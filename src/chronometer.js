class Chronometer {
	constructor() {
		this.currentTime = 0;
		this.intervalId = null;
	}

	start(printTimeCallback) {
		this.intervalId = setInterval(() => {
			this.currentTime++;
			if (printTimeCallback) {
				printTimeCallback(this.currentTime);
			}
		}, 1000);
	}

	getMinutes() {
		return parseInt(this.currentTime / 60);
	}

	getSeconds() {
		return this.currentTime % 60;
	}

	computeTwoDigitNumber(value) {
		// ... your code goes here
	}

	stop() {
		// ... your code goes here
	}

	reset() {
		// ... your code goes here
	}

	split() {
		// ... your code goes here
	}
}
