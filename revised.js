
var printVerse = function(num){
	
	var name1 = 'bottles';
	if(num === 1) { name1 = "bottle";}

	var name2 = 'bottles';
	if(num === 2) { name2 = 'bottle';}

	console.log(num + " " + name1 + " of beer on the wall,");
	console.log(num + " " + name1 + " of beer,");
	console.log("You take one down, you pass it around,");
	num--;
	console.log(num + " " + name2 + " of beer on the wall.\n");
}

for (var x = 99; x > 0; x--){
	printVerse(x)
}