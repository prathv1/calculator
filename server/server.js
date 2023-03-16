const cors = require('cors')

const express = require("express");
const app = express();
const port = 4002;

app.use(express.json())
app.use(cors())

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/calculate", (req, res) => {
    console.log(req.body)
  const str = req.body.str;
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
    console.log("Operator not found");
    res.json({ result: "Operator not found" })
  } else if (isNaN(result)) {
    console.log("Invalid expression");
    res.json({ result: "Invalid expression" })
  } else {
    let leftPart = str.slice(0, operatorIndex);
    let rightPart = str.slice(operatorIndex + 1);
    console.log(
      leftPart +
        " " +
        str.slice(operatorIndex, operatorIndex + 1) +
        " " +
        rightPart +
        " = " +
        result
    );
    res.json({ result: result.toString() })
    // res.send(result.toString());
  }

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
