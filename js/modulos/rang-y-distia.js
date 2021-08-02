// Rang
function rang(start,end,step) {
	if (step >= start && step <= end) {
		return true;
	} else {
		return false;
	}
};

// Distia
function distia(start1,end1,start2,end2,step,selector) {
	if (selector == 0 || selector == 1 || selector == 2 || selector == 3 || selector == 4 || selector == 5) {
		if (selector == 0 && rang(start1,end1,step) && rang(start2,end2,step)) {
			return true;
		} else if (selector == 1 && rang(start1,end1,step) && !(rang(start2,end2,step))) {
			return true;
		} else if (selector == 2 && rang(start1,start2,step)) {
			return true;
		} else if (selector == 3 && rang(end2,end1,step)) {
			return true;
		} else if (selector == 4 && rang(start1,end2,step)) {
			return true;
		} else if (selector == 5 && rang(start2,end1,step)) {
			return true;
		} else {
			return false;
		}
	} else {
		console.warn(`Selector no válido: ${selector}`);
	}
};