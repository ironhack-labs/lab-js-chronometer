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
		}, 10);
	}

	getMinutes() {
		return parseInt(this.currentTime / 6000);
	}

	getSeconds() {
		return parseInt((this.currentTime / 100) % 60);
	}

	getCentiseconds() {
		return parseInt(this.currentTime % 100);
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

		let centiseconds = this.computeTwoDigitNumber(this.getCentiseconds());

		let result = [minutes, seconds, centiseconds].join();

		let betterResult = result.replace(',', ':');
		return betterResult.replace(',', '.');
	}
}
let chrono = new Chronometer();
