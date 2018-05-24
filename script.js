function howLongFun(length) {
	var span = document.getElementById('repeatLong');
	while( span.firstChild ) {
		span.removeChild( span.firstChild );
	}
	span.appendChild( document.createTextNode(length) );
	rConvert();
}

function handleClick(value) {
	var span = document.getElementById('repeatUnit');
	while( span.firstChild ) {
		span.removeChild( span.firstChild );
	}
	span.appendChild( document.createTextNode(value) );
	rConvert();
}

function rConvert() {
	if (document.getElementById('timeSeconds').checked) {
		var multiplier = 1;
	} else if (document.getElementById('timeMinutes').checked) {
		var multiplier = 60;
	} else if (document.getElementById('timeHours').checked) {
		var multiplier = 3600;
	} else if (document.getElementById('timeDays').checked) {
		var multiplier = 86400;
	}
	var timeLength = document.getElementById('howLong').value
	var halfConverted = timeLength * multiplier;
	var converted = halfConverted / 5700;
	var span = document.getElementById('convertedUnit');
	while( span.firstChild ) {
		span.removeChild( span.firstChild );
	}
	span.appendChild( document.createTextNode(converted) );
	if (converted > 1) {
		var span = document.getElementById('addans');
		while( span.firstChild ) {
			span.removeChild( span.firstChild );
		}
		span.appendChild( document.createTextNode("s") );
	} else {
		var span = document.getElementById('addans');
		while( span.firstChild ) {
			span.removeChild( span.firstChild );
		}
		span.appendChild( document.createTextNode("") );
	}
}