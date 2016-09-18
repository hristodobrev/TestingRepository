function EventEmitter(){
	this.events = {};
}

EventEmitter.prototype.on = function(eventName, eventFunc) {
	if (!this.events[eventName]) {
		this.events[eventName] = [];
	}
	
	this.events[eventName].push(eventFunc);
};

EventEmitter.prototype.emit = function(eventName) {
	var args = [];
	for (var i = 1; i < arguments.length; i++) {
		args.push(arguments[i]);
	}
	
	var listeners = this.events[eventName];
	for (var i in listeners) {
		listeners[i].apply(this, args);
	}
};