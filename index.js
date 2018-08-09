// add solution here
function theBeatlesPlay(musicians,instruments) {
  var output = []
  for(var i = 0; i < musicians.length; ++i) {
    output.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return output
}

function johnLennonFacts(array) {
  for(var i=0; i < array.length; ++1) {
    array[i] = array[i]+"!!!"
  }
  return array
}