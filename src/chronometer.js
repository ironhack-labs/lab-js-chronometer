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
		let newArray = [];

		if (value < 10) {
			newArray.push(0);
			newArray.push(value);
			return newArray.join('');
		} else {
			newArray.push(value);
			return newArray.join();
		}
	}

	stop() {
		clearInterval(this.intervalId);
	}

	reset() {
		this.currentTime = 0;
	}

	split() {
		// ... your code goes here
	}
}

let chrono = new Chronometer();
