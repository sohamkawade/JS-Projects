
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const op = document.getElementById("op");
const result = document.getElementById("result");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const a = parseFloat(num1.value);
    const b = parseFloat(num2.value);
    const operator = op.value;
    let output;

    switch (operator) {
        case "+":
            output = a + b;
            break;
        case "-":
            output = a - b;
            break;
        case "*":
            output = a * b;
            break;
        case "/":
            output = a / b;
            break;
        case "%":
            output = a % b;
            break;
    }

    const operators = ["+", "-", "*", "/", "%"];
    if (!isNaN(a) && !isNaN(b) && operators.includes(operator)) {
        result.innerText = "Result: " + output;
    }
    else if (!operators.includes(operator)) {
        alert("Please select a operator.")
    } else {
        alert("Please enter valid numbers in both fileds.")
    }

});