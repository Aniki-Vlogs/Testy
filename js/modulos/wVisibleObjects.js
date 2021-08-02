setInterval(function () {
	document.querySelectorAll('*[wvo]').forEach(object => {
		let objTop = Math.round(object.getBoundingClientRect().top);
		let objBottom = Math.round(object.getBoundingClientRect().bottom);
		let winH = window.innerHeight;
		if (objTop < winH && objBottom > 0) {
			object.setAttribute('wvo','in');
		} else {
			object.setAttribute('wvo','out');
		}
	});
}, 20);