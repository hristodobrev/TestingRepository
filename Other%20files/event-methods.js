var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function() {
	console.log('listener1 executed.');
};

var listener2 = function() {
	console.log('listener2 executed.');
};

eventEmitter.addListener('connection', listener1);

eventEmitter.addListener('connection', listener2);

var eventListeners = events.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + ' Listener(s) listening to connection event.');

eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listener1);
console.log('listener1 will not listen now.');
eventEmitter.emit('connection');

eventListeners = events.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + ' Listener(s) listening to connection event.');

console.log('Programe Ended.');