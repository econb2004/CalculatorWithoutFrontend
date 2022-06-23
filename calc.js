function calculator(operator, num1, num2){
  if (operator == "+")
    return num1 + num2;
  if (operator == "-")
    return num1 - num2;
  if (operator == "*")
    return num1 * num2
  if (operator == "/")
    return num1 / num2;
  else
    console.log("please try again, you probably entered wrong argument type. You can only perform +, -, *, / operations for arg1, and you can use integer of float numbers for arg2 and arg3")
}



const result = calculator("/", 20.5, 10)
console.log(result)
