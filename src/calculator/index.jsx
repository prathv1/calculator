import React, { useState } from "react";

import "./index.css";

function index() {
  const insert = (e) => {
    setText((prev) => prev + e);
  };
  const [text, setText] = useState("");

  const clearScreen = () => {};
  const calculate = (str) => {
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
    } else if (isNaN(result)) {
      console.log("Invalid expression");
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
      setText(result.toString());
    }

    function factorial(n) {
      if (n === 0) {
        return 1;
      }
      return n * factorial(n - 1);
    }
  };
  const back = () => {};

  return (
    <div className="calculator">
      <div className="result">
        <input type="text" id="result" value={text} disabled />
      </div>
      <div className="buttons">
        <div className="row">
          <div
            className="button"
            onClick={() => {
              setText("");
            }}
          >
            C
          </div>
          <div
            className="button"
            onClick={() => {
              setText((prev) => prev.substring(0, prev.length - 1));
            }}
            disabled
          >
            back
          </div>
          <div className="button" onClick={(e) => insert("√")}>
            √
          </div>
        </div>
        <div className="row">
          <div className="button" onClick={(e) => insert("7")}>
            7
          </div>
          <div className="button" onClick={(e) => insert("8")}>
            8
          </div>
          <div className="button" onClick={(e) => insert("9")}>
            9
          </div>
          <div className="button" onClick={(e) => insert("ln")}>
            ln
          </div>
        </div>
        <div className="row">
          <div className="button" onClick={(e) => insert("4")}>
            4
          </div>
          <div className="button" onClick={(e) => insert("5")}>
            5
          </div>
          <div className="button" onClick={(e) => insert("6")}>
            6
          </div>
          <div className="button" onClick={(e) => insert("^")}>
            ^
          </div>
        </div>
        <div className="row">
          <div className="button" onClick={(e) => insert("1")}>
            1
          </div>
          <div className="button" onClick={(e) => insert("2")}>
            2
          </div>
          <div className="button" onClick={(e) => insert("3")}>
            3
          </div>
          <div className="button" onClick={(e) => insert("!")}>
            !
          </div>
        </div>
        <div className="row">
          <div className="button" onClick={(e) => insert("0")}>
            0
          </div>
          <div className="button" onClick={(e) => insert(".")}>
            .
          </div>
          <div className="button" onClick={(e) => calculate(text)}>
            =
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
