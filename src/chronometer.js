class Chronometer {
	constructor() {
		this.currentTime = 0;
		this.intervalId = null;
	}

	start(printTimeCallback) {
		this.intervalId = setInterval(() => {
			//check if printTimeCallback is passed as an argument
			if (printTimeCallback) {
				printTimeCallback();
			}
			this.currentTime++;
		}, 1000);
	}

	getMinutes() {
		return Math.floor(this.currentTime / 60);
	}

	getSeconds() {
		return this.currentTime % 60;
	}

	computeTwoDigitNumber(value) {
		if (value < 10) {
			return '0' + value;
		} else {
			return value.toString();
		}
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
