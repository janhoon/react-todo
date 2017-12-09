console.log("Spread Operator:");
console.log("1.\n");
function add(a, b) {
  return a + b;
}

console.log(add(2, 1));
var toAdd = [9, 5];

console.log(add(...toAdd));

console.log("\n2.\n ");

var groupA = ["Jen", "Koos"];
var groupB = ["Pieter "];

var final = [...groupB, 3, ...groupA];

console.log(final);

console.log("\n3.\n ");

var people = {
  personOne: ["Jan", 20],
  personTwo: ["Ifke", 21],
  personThree: ["Jakobus", 10]
}

function person(name, age) {
  return("Hi " + name + ", you are " + age.toString());
}

for (var key in people) {
  if (people.hasOwnProperty(key)) {
    console.log(person(...people[key]));
  }
}
