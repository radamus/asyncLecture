function log(val) {console.log(val);}


function echo(val, callback) {  setTimeout(function() {callback(val);}, Math.random()*1000);}

function cb(result){log(result);}

echo(1, cb);
echo(2, cb);
echo(3, cb);