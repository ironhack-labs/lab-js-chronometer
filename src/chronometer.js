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
		if (value < 10) {
			return '0' + value;
		} else {
			return value.toString();
		}
	}

	stop() {
		clearInterval(this.intervalId);
	}

	reset() {
		this.currentTime = 0;
	}

	split() {
		let minutes = this.computeTwoDigitNumber(this.getMinutes());

		let seconds = this.computeTwoDigitNumber(this.getSeconds());

		let result = [minutes, seconds].join();

		return result.replace(',', ':');
	}
}

let chrono = new Chronometer();
