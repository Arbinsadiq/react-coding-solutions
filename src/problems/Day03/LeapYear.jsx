import { useState } from "react";
import "./LeapYear.css";

const LeapYear = () => {
const [year, setYear] = useState("");
const [result, setResult] = useState("");
const [error, setError] = useState("");

const handleResult = () => {
const trimmedYear = year.trim();
if(!trimmedYear){
    setError("Please enter a year");
    setResult("");
    return
} 
setError("");
const numYear = parseInt(trimmedYear , 10);
const isLeapYear = (numYear % 4 === 0 && numYear % 100 !== 0 ) || numYear % 400 === 0;
setResult(isLeapYear ? `${numYear} is a Leap year `: `${numYear} is not a Leap year` ) ;
}

    return (
       <div className="container">
      <h1>Leap Year Checker</h1>
      <label data-testid="label-date">Enter a year -</label>
      <input
        type="text"
        data-testid="year-input"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />

      <button data-testid="check-btn" onClick={() => handleResult()}>
        Check
      </button>

      {error && (
        <div className="error" data-testid="error-msg">{error}</div>
      ) }

      {result && (
        <div className="result" data-testid="result">{result}</div>
      )}
    </div>
    )
}

export default LeapYear;