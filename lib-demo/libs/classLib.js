class classLib {

  static getRandNumByLimit(min, max) {
    return parseInt(Math.random() * (max - min + 1) + min, 10);
  }

  static getRandNumByLimitAndNum(min, max, num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
      var rand = ZixieMath.getRandNumByLimit(min, max)
      arr.push(rand)
    }
    return arr;
  }
}

module.exports = classLib