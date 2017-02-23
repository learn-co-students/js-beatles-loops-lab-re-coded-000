function theBeatlesPlay(array1,array2){
  var res=[];
  for(var i=0; i< array1.length;i++){
  	res.push(`${array1[i]} plays ${array2[i]}`);
  }
  return res;
}
function johnLennonFacts(array){
	var i=0;
	while(i< array.length){
		array[i]+="!!!";
		i+=1;
	}
	return array;
}
function iLoveTheBeatles(number){
	var i=[];
	do{
		i.push("I love the Beatles!");
		number+=1;
	} while(number < 15);
	return i;
}