// padSubtlety
function  padSubtlety() {
	// padSubtlety
	document.querySelectorAll('a[href^="#not"]').forEach(el => {
		el.addEventListener('click', () => {
			el.removeAttribute('href');
			setTimeout(function() {
				el.href = '#not';
			}, 2);
		});
	});
};

// smoothScroll
function smoothScroll() {
	document.querySelectorAll('a[href^="#"]').forEach(el => {
		el.addEventListener('click', function() {
			// Pre
			document.querySelector('#btn-menu').checked = null;
			document.querySelector('#btn-principal').checked = null;
			// save address.
			let ID = el.hash;
			if (ID != '#not') {
				// You are in.
				let youAreIn = ((el.hash).slice(1)).replaceAll('-',' ');
				// remove attribute.
				el.removeAttribute('href');
				// where I am.
				let wia = window.scrollY;
				// where I go.
				let wig = (document.querySelector(ID).offsetTop - document.querySelector('#cabezera').offsetHeight);
				// scroll.
				if (wia < wig) {
					let i = wia;
					// smooth.
					let smooth = setInterval(function() {
						if (i < wig) {
							if (i < (wig - 3000)) {i += 60;}
							if (i < (wig - 1600)) {i += 40;}
							if (i < (wig - 800)) {i += 20;}
							if (i < (wig - 300)) {i += 15;}
							if (i < (wig - 100)) {i += 10;}
							if (i < (wig - 5)) {i += 5;}
							if (i < wig) {i += 1;}
							window.scrollTo(wia,i);
						} else {
							clearInterval(smooth);
						};
					},20);
				} else if (wia > wig) {
					let i = wia;
					let smooth = setInterval(function() {
						if (i > wig) {
							if (i > (wig + 3000)) {i -= 60;}
							if (i > (wig + 1600)) {i -= 40;}
							if (i > (wig + 800)) {i -= 20;}
							if (i > (wig + 300)) {i -= 15;}
							if (i > (wig + 100)) {i -= 10;}
							if (i > (wig + 5)) {i -= 5;}
							if (i > wig) {i -= 1;}
							window.scrollTo(wia,i);
						} else {
							// Resolver.
							console.warn('Resolver');
							clearInterval(smooth);
						};
					},20);
				} else {
					alert(`Estás en: ${youAreIn}`);
				};
				// retrieve attribute.
				setTimeout(function() {
					el.href = ID;
				}, 20);
			} else {
				console.warn(`<< ${ID} >> no valido`);
			};
		});
	});
};