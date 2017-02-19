function theBeatlesPlay(musicians,instruments){
	var result = []

	for (var i = instruments.length; i > 0; i--){

		result.push(`${musicians[0]} plays ${instruments[0]}`)

		musicians.splice(0,1)
		instruments.splice(0,1)
	}
	return result
} 

function johnLennonFacts(facts){

	var result = []

	while (facts.length > 0){

		result.push(`${facts[0]}!!!`)

		facts.splice(0,1)
	}
	return result
}

function iLoveTheBeatles(number){
	var result = []

	do {
		result.push("I love the Beatles!")
		number++
	}while (number < 15)

	return result
}