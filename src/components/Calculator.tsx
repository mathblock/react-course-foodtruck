// import { useState } from "react";

import { useState } from "react";
import "./Calculator.css";

function Calculator() {

    const [ a, setA ] = useState<number>(0)
    const [b, setB ] = useState<number>(0)
    const [result,setResult] = useState<number>(0)


    const calculEvent = (e:React.MouseEvent<HTMLButtonElement>) => {

        switch (e.currentTarget.id) {
            case "plus":
                setResult(a + b)
            break;

            case "moin":
                setResult(a - b)
            break;

            case "fois":
                setResult(a * b)
            break;

            case "diviser":
                setResult(a / b)
            break;
    
            default:
                break;
        }
    }
  return (
    <div className="calculator">
      <h2>Mini Calculatrice</h2>

      <div className="inputs">
        <input type="number" placeholder="Nombre 1" onChange={(e)=>{
            setA(parseInt(e.target.value))
        }} />

        <input type="number" placeholder="Nombre 2"onChange={(e)=>{
            setB(parseInt(e.target.value))
        }} />
      </div>

      <div className="buttons">
        <button id="plus" onClick={calculEvent} className="btn add">+</button>
        <button  id="moin" onClick={calculEvent} className="btn sub">-</button>
        <button id="fois" onClick={calculEvent} className="btn mul">×</button>
        <button id="diviser" onClick={calculEvent} className="btn div">÷</button>
      </div>

      <div className="result">
        Résultat : {result}
      </div>
    </div>
  );
}

export default Calculator;
