let readLineSync = require('readline-sync');
let operations = require('./operations');

let name = readLineSync.question('Hogy hívnak barátom?');
console.log('Hello, ' + name);

let whichOperation = readLineSync.keyInSelect(['összeadás', 'kivonás', 'szorzás', 'osztás', 'hatványozás', 'gyökonás'], 'Mit szeretnénk csinálni?');
let number1 = readLineSync.questionInt('Adj egy sázmot: ');
let number2 = readLineSync.questionInt('Meg mégegyet: ');

function calculator (number1, number2) {
  switch (whichOperation) {
    case 0:
      return operations.add(number1, number2);
    case 1:
      return operations.sub(number1, number2);
    case 2:
      return operations.mul(number1, number2);
    case 3:
      return operations.div(number1, number2);
    case 4:
      return operations.sqr(number1, number2);
    case 5:
      return operations.root(number1, number2);
  }
}

module.exports = { calculator };
console.log('Az eredmeny: ', calculator(number1, number2));
