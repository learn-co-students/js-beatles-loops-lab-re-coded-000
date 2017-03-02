function theBeatlesPlay(musicians,instruments){
	var newArray=[];
	for(var i=0; i< musicians.length; i++)
	{
		newArray.push(musicians[i] +" plays "+ instruments[i]);
	}
  return newArray;
}

function johnLennonFacts(facts){
var i=0; factsArray=[];
	while(i<facts.length)
	{
     factsArray.push(facts[i]+"!!!");
     i++;
	}
return factsArray;
}

function iLoveTheBeatles(number){
	var numArray=[];
	do{
		numArray.push("I love the Beatles!");
       number++;
	} while(number < 15)
 return numArray;
}
