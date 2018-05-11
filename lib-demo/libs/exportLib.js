const getRandNumByLimit = function(min, max) {
  return parseInt(Math.random() * (max - min + 1) + min, 10);
}

const getRandNumByLimitAndNum= function(min, max, num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    var rand = ZixieMath.getRandNumByLimit(min, max)
    arr.push(rand)
  }
  return arr;
}

module.exports = {
  a: getRandNumByLimit,
  b: getRandNumByLimitAndNum
}
