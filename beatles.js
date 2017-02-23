function theBeatlesPlay(musicians, instruments) {
 var array= []
 for (i=0, l= musicians.length; i<l; i++){
 	array.push(`${musicians.shift()} plays ${instruments.shift()}`)
 }
 return array
}

function johnLennonFacts(facts) {
  var factsArray = []
  var i = 0
  while(i < facts.length) {
    factsArray.push(`${facts[i]}!!!`)
    i++
  }
  return factsArray
}
function iLoveTheBeatles(number) {
  var arr = []
  do {
    arr.push("I love the Beatles!")
    number++
  } while (number < 15)
  return arr

}