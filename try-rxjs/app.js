var button = document.querySelector('button');
var label = document.querySelector('h4');

var clickStream = Rx.Observable.fromEvent(button, 'click');
console.log('clickStream', clickStream);

var doubleClickStream = clickStream
    .bufferWhen(() => clickStream.debounceTime(250))
    .map(arr => arr.length)
    .filter(len => len === 2);

console.log(doubleClickStream);
doubleClickStream.subscribe(event => {
    label.textContent = 'double click';
    console.log('event', event);
});

doubleClickStream
    .delay(1000)
    .subscribe(suggestion => {
        label.textContent = '-';
    });

var streamA = Rx.Observable.of(3,5);
console.log(streamA);

var streamB = streamA.map(a => a * 10);
streamB.subscribe(b => console.log('b', b));