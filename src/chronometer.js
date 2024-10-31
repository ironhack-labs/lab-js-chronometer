class Chronometer {
	constructor() {
		this.currentTime = 0;
		this.intervalId = null;
	}

	start(printTimeCallback) {
		this.intervalId = setInterval(() => {
			this.currentTime++;
			if (printTimeCallback) printTimeCallback();
		}, 1000);
	}

	getMinutes() {
		return Math.floor(this.currentTime / 60);
	}

	getSeconds() {
		return this.currentTime % 60;
	}

	computeTwoDigitNumber(value) {
		return value.toString().padStart(2, '0').slice(-2);
	}

	stop() {
		clearInterval(this.intervalId);
	}

	reset() {
		this.currentTime = 0;
	}

	split() {
		const minutes = this.computeTwoDigitNumber(
			this.getMinutes(this.currentTime)
		);
		const seconds = this.computeTwoDigitNumber(
			this.getSeconds(this.currentTime)
		);

		return `${minutes}:${seconds}`;
	}
}
