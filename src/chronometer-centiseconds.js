class Chronometer {
	constructor() {
		this.currentTime = 0;
		this.intervalId = null;
	}

	start(printTimeCallback) {
		this.intervalId = setInterval(() => {
			this.currentTime++;
			if (printTimeCallback) printTimeCallback();
		}, 10);
	}

	getMinutes() {
		return Math.floor(this.currentTime / 6000);
	}

	getSeconds() {
		return Math.floor((this.currentTime % 6000) / 100);
	}

	getCentiseconds() {
		return (this.currentTime % 6000) % 100;
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
		const centiSeconds = this.computeTwoDigitNumber(
			this.getCentiseconds(this.currentTime)
		);

		return `${minutes}:${seconds}.${centiSeconds}`;
	}
}
