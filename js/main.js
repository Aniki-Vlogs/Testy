let list = [
	'screenLoad',
	'wVisibleObjects',
	'scroll-subtlety',
	'rang-y-distia'
];

imports(list);

function imports(exports) {
	for (var i = 0; i < exports.length; i++) {
		let Scripts = document.createElement('script');
		Scripts.src = `./js/modulos/${exports[i]}.js`;
		document.querySelector('head').appendChild(Scripts);
	};
};

window.onload=function() {
	// screenLoad
	screenLoad();
	// scrollBehavior
	smoothScroll();
	// padSubtlety
	padSubtlety();
	// INFO
	setTimeout(function() {document.querySelector('#btn-info').checked = true;}, 3000);
};
