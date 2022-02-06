module.exports = function reverse (n) {
  n = String(Math.abs(n)); // number to string with abs
  return Number(n.split('').reverse().join(''));
}
