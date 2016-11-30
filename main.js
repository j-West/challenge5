function fibonacci(num1, num2) {
  var num3 = num1 + num2;
  if (num3 > 499) {
    console.log(num2);
    return console.log("That's all folks");
   }
    console.log(num2);
    return fibonacci(num2, num3);

}


fibonacci(1, 1);
