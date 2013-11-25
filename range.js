//http://stackoverflow.com/questions/18082/validate-numbers-in-javascript-isnumeric
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function log(val) {console.log(val);}

function range(start, amount, callback, done, err) {
	var counter = 0;
	if(isNumber(start) && isNumber(amount)) {
		var interval = setInterval(function(){ 
			callback(start + counter);
			++counter;
			if(counter >= amount) {
				clearInterval(interval);
				done();
			}
		}, Math.random()*1000);
	} else {
		err("Not a number");
	}
}


range(0,3,function(res) {log(res)}, function(){ log("done!")}, function(err) {log("err");})