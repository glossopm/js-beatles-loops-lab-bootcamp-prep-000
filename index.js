// add solution here
function theBeatlesPlay(musicians,instruments) {
  var output = []
  for(var i = 0; i < musicians.length; ++i) {
    output.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return output
}

function johnLennonFacts(array) {
  for(var i=0; i < array.length; ++i) {
    array[i] = array[i]+"!!!"
  }
  return array
}
function iLoveTheBeatles(n) {
  var array = []
  for(var i=0; i < n; ++i) {
    array.push("I love the Beatles!")
  }
  return array
}
