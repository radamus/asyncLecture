var when = require('when');
function log(val) {console.log(val);}


function echo(val, callback) {  setTimeout(function() {callback(val);}, Math.random()*1000);}


echo(1, function(result){
	log(result); 
	echo(2, function(result){
		log(result);
		echo(3, function(result){
			log(result);
		});
	});
});

/*----------------------------------------------------------------------------------------------------------------*/

function defferedEcho(val) {
	var deffered = when.defer();

	echo(val, function(res) {
		deffered.resolve(res);
	});

	return deffered.promise;
}

defferedEcho(1)
.then(function(res) { log('deffered ' + res); return defferedEcho(2);})
.then(function(res){log('deffered ' + res); return defferedEcho(3);} )
.then(function(res){log('deffered ' + res); } );

