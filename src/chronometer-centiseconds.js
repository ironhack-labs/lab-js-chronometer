class Chronometer {
	constructor() {
		this.currentTime = 0;
		this.intervalId = null;
	}

	start(printTimeCallback) {
		this.intervalId = setInterval(() => {
			this.currentTime += 1;
			if (printTimeCallback) printTimeCallback();
		}, 10);
	}

	getMinutes() {
		const minutes = Math.floor((this.currentTime * 0.01) / 60);
		return minutes;
	}

	getSeconds() {
		const seconds = Math.floor(this.currentTime * 0.01) % 60;
		return seconds;
	}

	getCentiseconds() {
		const centiSec = this.currentTime % 100;
		return centiSec;
	}

	computeTwoDigitNumber(value) {
		let numStr = `${value}`;
		if (numStr.length < 2) numStr = "0" + numStr;
		return numStr;
	}

	stop() {
		clearInterval(this.intervalId);
	}

	reset() {
		this.currentTime = 0;
	}

	split() {
		const currMinStr = this.computeTwoDigitNumber(this.getMinutes());
		const currSecStr = this.computeTwoDigitNumber(this.getSeconds());
		const currCentiStr = this.computeTwoDigitNumber(this.getCentiseconds());
		return `${currMinStr}:${currSecStr}.${currCentiStr}`;
	}
}
