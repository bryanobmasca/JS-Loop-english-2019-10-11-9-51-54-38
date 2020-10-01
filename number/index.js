var odd = ' is odd number.';
var even = ' is even number.'
for (var i = 1; i<=20; i++){
	if (i % 2 != 0 ){
		console.log(i + odd);
	}
	else{
		console.log(i + even);
	}
}