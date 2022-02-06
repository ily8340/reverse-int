module.exports = function reverse (n) {
  n = String(Math.abs(n));
  return Number(n.split('').reverse().join(''));
}
