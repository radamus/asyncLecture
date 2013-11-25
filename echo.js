var when = require('when');
function log(val) {console.log(val);}


function echo(val, callback) { if(val === null) {callback('null'); return; } setTimeout(function() {callback(null, val);}, Math.random()*1000);}


echo(1, function(err, result){
	if(err) {
		log(result); 
		return;
	}
	log(result); 
	echo(2, function(err, result){
		if(err) {
			log(result); 
			return;
		}
		log(result);
		echo(3, function(err, result){
			if(err) {
				log(result); 
				return;
			}
			log(result);
		});
	});
});

/*----------------------------------------------------------------------------------------------------------------*/

function defferedEcho(val) {
	var deffered = when.defer();

	echo(val, function(err, res) {
		if(err) { deffered.reject(err); return; }
		deffered.resolve(res);
	});

	return deffered.promise;
}

defferedEcho(1)
.then(function(res) { log('deffered ' + res); return defferedEcho(null);})
.then(function(res){log('deffered ' + res); return defferedEcho(3);} )
.then(function(res){log('deffered ' + res); }, function(err){log('deffered error ' + err);} );

