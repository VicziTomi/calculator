function add (number1, number2) {
  return number1 + number2;
}
function sub (number1, number2) {
  return number1 - number2;
}
function mul (number1, number2) {
  return number1 * number2;
}
function div (number1, number2) {
  return number1 / number2;
}
function sqr (number1, number2) {
  return Math.pow(number1, number2);
}
function root (number1, number2) {
  return Math.pow(number1, 1 / number2);
}

module.exports = {
  add,
  sub,
  mul,
  div,
  sqr,
  root
};
