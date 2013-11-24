function log(val) {console.log(val);}


function echo(val) { return setTimeout(function() {return val;}, 500);}

log(echo(1));
log(echo(2));
log(echo(3));