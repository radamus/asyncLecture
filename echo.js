function log(val) {console.log(val);}


function echo(val, callback) {  setTimeout(function() {callback(val);}, Math.random()*1000);}

function cb(result){log(result);}

echo(1, function(result){
	log(result); 
	echo(2, function(result){
		log(result);
		echo(3, function(result){
			log(result);
		});
	});
});
