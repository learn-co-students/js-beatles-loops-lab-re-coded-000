
function theBeatlesPlay(musicians, instruments)
{
  var array = [];
  for(var i = 0; i < musicians.length; i++)
  {
  	array.push(`${musicians[i]} plays ${instruments[i]}`);
}  
  return array;
}


function johnLennonFacts(facts) {
	var arrFact = []

  var i = 0
  while (i < facts.length) {
    arrFact.push(`${facts[i]}!!!`)
    i++
  }
  return arrFact
}

function iLoveTheBeatles(name){
	var result = []
	do{
		result.push("I love the Beatles!");
		name++;
	}
	while(name < 15) 
	return result;
	}