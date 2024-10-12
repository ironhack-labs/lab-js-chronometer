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
		if (this.currentTime > 0) {
			return this.currentTime % 60;
		} else {
			return 0;
		}
	}

	computeTwoDigitNumber(value) {
		// ... your code goes here
		let twoDigitNumber = value.toString();
		if (twoDigitNumber.length === 1) {
			return (twoDigitNumber = "0" + value);
		} else {
			return twoDigitNumber;
		}
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
		const formattedMinutes = this.computeTwoDigitNumber(this.getMinutes());
		const formattedSeconds = this.computeTwoDigitNumber(this.getSeconds());
		return `${formattedMinutes}:${formattedSeconds}`;
	}
}
