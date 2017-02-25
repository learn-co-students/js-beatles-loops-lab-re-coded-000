
function theBeatlesPlay(musicians,  instruments) {
	var myArray = [];
	for (let i = 0, l = musicians.length; i < l; i++) {
    myArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return myArray
}




function johnLennonFacts(facts){
  var i = 0
  var excitedFacts = [];
  while (i < facts.length){
    excitedFacts.push(`${facts[i]}!!!`);
    i++
  }
  return excitedFacts;
}
function iLoveTheBeatles(number) {
	var myArray=[];

do {
    myArray.push("I love the Beatles!");
    number++;
} while (number < 15);
return myArray
}