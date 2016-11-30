function fibonacci(num1, num2) {
  var num3 = num1 + num2;
  if (num3 > 499) {
    console.log(num2);
    return console.log("That's all folks");
  }else if (num1 === 1 && num2 === 1 ) {
    console.log(num1);
  }
    console.log(num2);
    return fibonacci(num2, num3);
}

fibonacci(1, 1);
