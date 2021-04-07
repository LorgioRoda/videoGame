class Timer {
	constructor() {
		this.currentTime = 2000; //seconds
		this.intervalId
	}

	startClick(callback) {
		this.intervalId = setInterval(this.update.bind(this), 1000)
	}
    stop(){
        clearInterval(this.intervalId);
    }
    update(){
        this.timeLeft = this.timeLeft - 1;
    }
	getMinutes() {
		return Math.floor(this.currentTime / 60);
	}
	getSeconds() {
		return Math.floor(this.timeLeft - this.getMinutes() * 60)
	}
	twoDigitsNumber(time) {
		return time === 0 ? "00" : time > 0 && time < 10 ? "0" + time : "" + time;
	}
	getStringTimer() {
		return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`;
	}
}