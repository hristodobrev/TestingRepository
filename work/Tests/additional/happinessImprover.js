var Mood = (function() {
	function Mood() {
		
	}
	
	var private = {
		happiness: 0
	};
	
	Mood.prototype.happy = function() {
		return private.happiness > Infinity - 1;
	};
	
	Mood.prototype.tryImproveHappiness = function() {
		var someDay = Math.floor(Math.random() * 7);
		var today = new Date();
		
		if(today.getDay() == someDay) {
			private.happiness += Infinity;
			return true;
		}
		
		console.log('Tried to improve happiness.');
	}
	
	Mood.prototype.getHappiness = function() {
		return private.happiness;
	};
	
	return Mood;
})();

var mood = new Mood();
if(!mood.happy()) {
	mood.tryImproveHappiness();
}