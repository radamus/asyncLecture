function log(val) {console.log(val);}


function echo(val, callback) {  setTimeout(function() {callback(val);}, 500);}

function cb(result){log(result);}

echo(1, cb);
echo(2, cb);
echo(3, cb);