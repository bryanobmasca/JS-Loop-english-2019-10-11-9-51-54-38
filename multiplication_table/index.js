var value;
var word;
var storedValue = [];
for (var i = 1; i<=9; i++){
	for(var j = 1; j<=i; j++){
		value = j * i;
		word = i + '*' + j + '=' + value;
		storedValue.push(word);
	}
	word = storedValue.join(" ");
	console.log(word);
	storedValue = [];
}