function theBeatlesPlay(musicians,  instruments) {
	var theBeates = [];
	for (let i = 0, l = musicians.length; i < l; i++) {
    theBeates.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return theBeates
}

function johnLennonFacts(facts) {
	var realFacts = []

  let i = 0
  while (i < facts.length) {
    realFacts.push(`${facts[i]}!!!`)
    i++
  }

  return realFacts

}

function iLoveTheBeatles(number) {
	var loveBeates = []

	do {
    loveBeates.push('I love the Beatles!')
    number++
  } while (number < 15)

  return loveBeates
}