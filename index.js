// add solution here
function theBeatlesPlay(musicians,instruments) {
  var output = []
  for(var i = 0; i < musicians.length, ++i) {
    output.push(`${musicians[i]} plays ${instrucments[i]}`)
  }
  return output
}