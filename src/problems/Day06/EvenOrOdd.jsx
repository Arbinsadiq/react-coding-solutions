import { useState } from "react";

const EvenOrOdd = () => {
    const [number, setNumber] = useState("");
    const [result, setResult] = useState("");
    const [ loading, setLoading] = useState(false);

    const CheckEvenOrOdd = () => {
        setResult(null);
        setLoading(true);
        setTimeout(() => {
            const parsed = parseInt(number, 10);
            if(isNaN(parsed)){
                setResult("Please enter a valid number");
            } else {
                setResult( `The number ${parsed} is ${parsed % 2 === 0 ? "Even" : "Odd"} `);
            }
            setLoading(false);
        }, 1000);
    };

    
    return (
        <div className="even-odd-container">
            <h1 className="title">Even or Odd</h1>
            <input className="number-input" type="number" value={number} onChange={(e) => setNumber(e.target.value)}/>
            <button className="check-button" type="button" onClick={CheckEvenOrOdd}>Check</button>
            <div className="result-container">
                {loading ? <p>Checking...</p> : <p>Result: {result}</p>}
            </div>
        </div>
    )
}

export default EvenOrOdd;