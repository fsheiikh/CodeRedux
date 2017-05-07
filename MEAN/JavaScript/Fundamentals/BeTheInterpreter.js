var hello;

function example() {
  var hello = "hi!";
  console.log(hello);
}

hello = "interesting";
example();
console.log(hello);

///////////////////////////////////////



var first_variable;

function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}

console.log(first_variable);
first_variable = "Yipee I was first!";
console.log(first_variable);

//////////////////////////////////////////

var food;

function eat() {
  var food;
  food = "half-chicken";
  console.log(food);
  food = "gone";       // CAREFUL!
  console.log(food);
}

food = "Chicken";
eat();
console.log(food);

////////////////////////////////

var new_word;
function lastFunc() {
  new_word = "old";
}

new_word = "NEW!";
console.log(new_word);