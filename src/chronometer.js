/** @format */

class Chronometer {
	constructor(currentTime = 0, intervalId = null) {
		// ... your code goes here

		this.currentTime = currentTime;
		this.intervalId = intervalId;
	}

	start(printTimeCallback) {
		// ... your code goes here
		this.intervalId = setInterval(() => {
			this.currentTime++;

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
		value = String(value);

		if (value.length < 2) {
			return "0" + value;
		} else return value;
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
		return `${this.computeTwoDigitNumber(
			this.getMinutes()
		)}:${this.computeTwoDigitNumber(this.getSeconds())}`;
	}
}
