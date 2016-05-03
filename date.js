Date.dayInitials = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
Date.monthShortNames =
	['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
Date.monthFullNames =
	['January', 'February', 'March', 'April', 'May', 'June',
		'July', 'August', 'September', 'October', 'November', 'December'];

Date.fromISODate = function(aDate) {
	if (aDate) {
		var m = aDate.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})([ T]([0-9]{2}):([0-9]{2})(:([0-9]{2}))?)?/);
		if (m) {
			return new Date(m[1], m[2] - 1, m[3], m[5] || 0, m[6] || 0, m[8] || 0);
		}
	}
	return null;
};

Date.prototype.toISODate = function(aWithTime) {
	var y = this.getFullYear();
	var m = this.getMonth() + 1;
	var d = this.getDate();

	var s = y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d);

	if (aWithTime)
		return s + ' ' + this.toISOTime();
	return s;
};

Date.prototype.toISOTime = function() {
	var hr = this.getHours();
	var min = this.getMinutes();
	var sec = this.getSeconds();

	return (hr < 10 ? '0' + hr : hr) + ':' +
		(min < 10 ? '0' + min : min) + ':' +
		(sec < 10 ? '0' + sec : sec);
};

Date.prototype.isMidnight = function() {
	return this.getHours() == 0 && this.getMinutes() == 0 && this.getSeconds() == 0;
};

Date.prototype.isSameDate = function(date) {
	return date &&
		this.getFullYear() == date.getFullYear() &&
		this.getMonth() == date.getMonth() &&
		this.getDate() == date.getDate();
};

Date.prototype.isSameMonth = function(date) {
	return date &&
		this.getFullYear() == date.getFullYear() &&
		this.getMonth() == date.getMonth();
};

Date.prototype.isToday = function() {
	return this.isSameDate(new Date());
};
