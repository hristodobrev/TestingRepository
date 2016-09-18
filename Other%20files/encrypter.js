function encrypt(word, key) {
	var charCodes = [];
	for (var i = 0; i < word.length; i++) {
		charCodes.push(word.charCodeAt(i));
	}
	
	var mask = 0;
	
	for (var i = 0; i < key.length; i++) {
		mask += key.charCodeAt(i);
	}
	
	var encryptedCharCodes = [];
	for (var i in charCodes) {
		var charCode = charCodes[i] ^ mask;
		if(charCode > 127) {
			encryptedCharCodes.push(128);
			while(charCode > 127) {
				var randCharCode = Math.floor(Math.random() * 128);
				charCode -= randCharCode;
				encryptedCharCodes.push(randCharCode);
			}
			if(charCode != 0) {
				encryptedCharCodes.push(charCode);
			}
			encryptedCharCodes.push(128);
		}
	}	
	var encryptedWord = String.fromCharCode.apply(this, encryptedCharCodes);
	
	console.log(encryptedCharCodes);
	
	return encryptedWord;
}

function decrypt(cryptedWord, key) {
	var charCodes = [];
	for (var i = 0; i < cryptedWord.length; i++) {
		charCode = cryptedWord.charCodeAt(i);
		if(charCode == 128) {
			var j = i + 1;
			var currentCharCode = 0;
			while(cryptedWord.charCodeAt(j) != 128 && j < cryptedWord.length) {
				currentCharCode += cryptedWord.charCodeAt(j);
				j++;
			}
			i = j + 1;
			charCodes.push(currentCharCode);
		} else {		
			charCodes.push(charCode);
		}
	}
		
	var mask = 0;
	
	for (var i = 0; i < key.length; i++) {
		mask += key.charCodeAt(i);
	}
	
	var decryptedCharCodes = [];
	for (var i in charCodes) {
		decryptedCharCodes.push(charCodes[i] ^ mask);
	}
	
	var decryptedWord = String.fromCharCode.apply(this, decryptedCharCodes);
	
	return decryptedWord;
}