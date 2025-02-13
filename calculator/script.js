function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y == 0) {
        return "Error! Division by zero.";
    } else {
        return x / y;
    }
}

function performCalculation() {
    const operation = document.getElementById("operation").value;
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers.";
    } else {
        if (operation === "add") {
            result = `${num1} + ${num2} = ${add(num1, num2)}`;
        } else if (operation === "subtract") {
            result = `${num1} - ${num2} = ${subtract(num1, num2)}`;
        } else if (operation === "multiply") {
            result = `${num1} * ${num2} = ${multiply(num1, num2)}`;
        } else if (operation === "divide") {
            result = `${num1} / ${num2} = ${divide(num1, num2)}`;
        }
    }

    document.getElementById("result").innerText = result;
}
