function fib() {

  var first = 0
  var second = 1
  var third = second + first
  
  console.log(third)

  function nacci() {
    // do something to those variables here
    console.log(third)    
    first = second
    second = third
    third = second + first
    
    
  }
  return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"