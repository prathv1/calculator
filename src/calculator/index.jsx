import React,{useState} from "react";

import "./index.css";

function index() {
    const insert = (e) => {setText(prev => prev+e)};
    const [text,setText] = useState('');

    const clearScreen = () => {};
    const back = () => {};

  return (
    <div className="calculator">
      <div className="result">
        <input type="text" id="result" value={text} disabled />
      </div>
      <div className="buttons">
        <div className="row">
          <div className="button" onClick={()=>{setText('')}}>
            C
          </div>
          <div className="button" onClick={()=>{setText(prev => prev.substring(0,prev.length-1))}} disabled>
            back
          </div>
          <div className="button" onClick={(e)=>insert('√')}>
          √
          </div>
        </div>
        <div className="row">
          <div className="button" onClick={(e)=>insert('7')}>
            7
          </div>
          <div className="button" onClick={(e)=>insert('8')}>
            8
          </div>
          <div className="button" onClick={(e)=>insert('9')}>
            9
          </div>
          <div className="button" onClick={(e)=>insert('ln')}>
            ln
          </div>
        </div>
        <div className="row">
          <div className="button" onClick={(e)=>insert('4')}>
            4
          </div>
          <div className="button" onClick={(e)=>insert('5')}>
            5
          </div>
          <div className="button" onClick={(e)=>insert('6')}>
            6
          </div>
          <div className="button" onClick={(e)=>insert('^')}>
            ^
          </div>
        </div>
        <div className="row">
          <div className="button" onClick={(e)=>insert('1')}>
            1
          </div>
          <div className="button" onClick={(e)=>insert('2')}>
            2
          </div>
          <div className="button" onClick={(e)=>insert('3')}>
            3
          </div>
          <div className="button" onClick={(e)=>insert('!')}>
            !
          </div>
        </div>
        <div className="row">
          <div className="button" onClick={(e)=>insert('0')}>
            0
          </div>
          <div className="button" onClick={(e)=>insert('.')}>
            .
          </div>
          <div className="button" onClick={(e)=>calculate()}>
            =
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
