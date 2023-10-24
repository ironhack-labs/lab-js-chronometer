class Chronometer {
	constructor() {
		this.currentTime = 0;
		this.intervalId = null;
	}

	start(printTimeCallback) {
		this.intervalId = setInterval(() => {
			if (typeof printTimeCallback === 'function') {
				printTimeCallback();
			}
			return (this.currentTime += 1);
		}, 1000);
	}

	getMinutes() {
		return Math.floor(this.currentTime / 60);
	}

	getSeconds() {
		if (this.currentTime > 0) {
			return this.currentTime % 60;
		} else if (this.currentTime === 0) {
			return 0;
		}
	}

	computeTwoDigitNumber(value) {
		let result = String(value);
		if (result.length === 2) {
			return result;
		} else if (result.length === 1) {
			return `0${result}`;
		}
	}

	stop() {
		clearInterval(this.intervalId);
	}

	reset() {
		return (this.currentTime = 0);
	}

	split() {
		return `${this.computeTwoDigitNumber(
			this.getMinutes()
		)}:${this.computeTwoDigitNumber(this.getSeconds())}`;
	}
}
