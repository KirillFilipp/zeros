module.exports = function zeros(expression) {
  const myArr = [];
  const myArrDoub = [];
  let res = 0;
  let resDoub = 0;
  let resDoubTwo = 0;
  let sumMyArr;
  let myExpression = expression.split('*');
  let myExpressionLength = myExpression.length;
  for (let i = 0; i < myExpressionLength; i++) {
    let b = myExpression[i].length;
    let bB = b - 2;
    if (myExpression[i].substring(bB, b - 1) !== "!") {
      myArr.push(myExpression[i].substring(0, b - 1));
    } else {
      myArrDoub.push(myExpression[i].substring(0, b - 2));
    }
  }
  for (let j = 0; j < myArr.length; j++) {
    let number = myArr[j];
    while (number > 0) {
      number = Math.floor(number / 5);
      res = res + number;
    }
  }
  sumMyArr = myArrDoub.reduce(function (sum, current) {
    return sum + parseInt(current);
  }, 0);

  for (let k = 0; k < myArrDoub.length; k++) {
    let numberDoub = myArrDoub[k];
    if ((myArr.length == 0) && (sumMyArr % 2 !== 0) && (numberDoub % 2 !== 0) && (numberDoub > 10)) {
      numberDoub = 0;
    } else {
      while (numberDoub > 0) {
        if (numberDoub % 25 == 0 && numberDoub % 5 == 0) {
          resDoub += 2;
        } else if (numberDoub % 5 == 0) {
          resDoub++;
        }
        numberDoub -= 2;
      }
    }
  }
  return res + resDoub;
}