function theBeatlesPlay(array_of_musicians,array_of_instruments) {
	var array=[];
	for(var i=0;i<array_of_musicians.length;i++) {
		array.push(`${array_of_musicians[i]} plays ${array_of_instruments[i]}`);
	}
	return array;
}

function johnLennonFacts(array_of_facts) {
	var facts=[];
	i=0
	while(i<array_of_facts.length) {
		facts.push(`${array_of_facts[i]}!!!`)
	i++
	} 
	return facts;
}

function iLoveTheBeatles(number) {
	var array=[];
	do {
		array.push("I love the Beatles!")
		number++
	}while(number < 15)
	return array;
}