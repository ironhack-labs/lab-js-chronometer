class Chronometer {
	constructor() {
		this.currentTime = 0;
		this.intervalId = null;
	}

	start(printTimeCallback) {
		this.intervalId = setInterval(() => {
			this.currentTime++;
			if (printTimeCallback) {
				printTimeCallback();
			}
		}, 1000);
	}

	getMinutes() {
		return Math.floor(this.currentTime / 60);
	}

	getSeconds() {
		return this.currentTime % 60;
	}

	computeTwoDigitNumber(value) {
		if (String(value).length === 1) {
			value = `0${value}`;
		} else {
			value = `${value}`;
		}
		return value;
	}

	stop() {
		clearInterval(this.intervalId);
	}

	reset() {
		this.currentTime = 0;
	}

	split() {}
}
