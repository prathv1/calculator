function factorial(n) {
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
}
export default function calulate(str){
    let operatorIndex = -1;
    let result = NaN;

    if (str.includes("^")) {
        operatorIndex = str.indexOf("^");
        let base = parseFloat(str.slice(0, operatorIndex));
        let exponent = parseFloat(str.slice(operatorIndex + 1));
        result = Math.pow(base, exponent);
    } else if (str.includes("ln")) {
        operatorIndex = str.indexOf("ln");
        let operand = parseFloat(str.slice(operatorIndex + 2));
        if (operand > 0) {
        result = Math.log(operand);
        }
    } else if (str.includes("!")) {
        operatorIndex = str.indexOf("!");
        let operand = parseFloat(str.slice(0, operatorIndex));
        if (Number.isInteger(operand) && operand >= 0) {
        result = factorial(operand);
        }
    } else if (str.includes("√")) {
        operatorIndex = str.indexOf("√");
        let operand = parseFloat(str.slice(operatorIndex + 1));
        if (operand >= 0) {
        result = Math.sqrt(operand);
        }
    }
    if (operatorIndex === -1) {
        return { result: "Operator not found" };
    } else if (isNaN(result)) {
        return { result: "Invalid expression" };
    } else {
        return { result: result.toString() };
        // res.send(result.toString());
    }
}
