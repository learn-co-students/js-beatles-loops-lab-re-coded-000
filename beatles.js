'use strict';

function theBeatlesPlay(a,b) {
  var c=[] ;
  for(var i=0;i<a.length;i++){
    c.push(a[i]+" plays "+b[i]);
  }
  return c ;
}
function johnLennonFacts(a) {
  var c=[] ;
  for(var i=0;i<a.length;i++){
    c.push(a[i]+"!!!");
  }
  return c ;
}

function iLoveTheBeatles(n) {
  var a=[];
  if (n < 8){
    for(var i=0;i<=n;i++){
      a.push("I love the Beatles!");
    }
  }
  else{a.push("I love the Beatles!");}
  return a ;
}
theBeatlesPlay([1,2,3],["1","2","3"])