onmessage = function(e) {
	if(e.data === 'runCounter') {
		runCounter();
	} else if(e.data === 'drawMatrix') {
		drawMatrix();
	}
}

function drawMatrix() {
	var counter = 0;
	var cycle = setInterval(sendData, 10);
	
	function sendData() {
		if(counter == 2000) {
			clearInterval(cycle);
		}
		
		var random = Math.floor(Math.random() * 3);
		var color = 'easy';
		
		switch(random) {
			case 0: color = 'easy'; break;
			case 1: color = 'medium'; break;
			case 2: color = 'hard'; break;
		}
		
		var obj = {color: color, data: Math.floor(Math.random() * 2)};
		
		postMessage(JSON.stringify(obj));
		
		counter++;
	}
}

function runCounter() {
	var counter = 0;
	
	while(counter < 10) {
		postMessage(counter);
		counter++;
		sleep(1);
	}
}

function sleep(seconds){
	var date = new Date().getTime() + (seconds * 1000);
	while(new Date().getTime() <= date){}
}