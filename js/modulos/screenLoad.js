function screenLoad() {
	// SCREENLOAD
	{
		let ob1 = document.querySelector('#screenload');
		ob1.style.transition = '1.2s ease';
		ob1.style.opacity = '0';
		setTimeout(function() {
			ob1.remove();
		}, 1200);
	}
}