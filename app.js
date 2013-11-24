var Rx = require('rx');

var source = Rx.Observable.range(0, 3)
//.selectMany(function (x) { console.log( x); return Rx.Observable.range(0, x); })
    .select(function (x) { return Rx.Observable.range(x, 3); })
   .switchLatest();

var subscription = source.subscribe(
    function (x) {
        console.log('Next: ' + x);
    },
    function (err) {
        console.log('Error: ' + err);   
    },
    function () {
        console.log('Completed');   
    });
