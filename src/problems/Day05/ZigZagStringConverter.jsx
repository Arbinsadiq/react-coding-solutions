import { useState } from "react";
import "./style.css";

export const zigZagString = (arr) => {
    return arr.map((str, i) => (i % 2 === 0 ? str : str.split("").reverse().join("")))
    .join("");
}

const ZigZagStringConverter = () => {
    const [text, setText] = useState("");
    const [result, setResult] = useState("");

    const ConvertToZigZag = () => {
        if(!text.trim()) return;
        const array = text.split(",").map((s) => s.trim());
        setResult(zigZagString(array));
    }
    return (
        <div className="container">
            <h1>ZigZag String Converter</h1>
            <form>
                <label htmlFor="text">Text:</label>
                <input type="text" id="text" value={text} onChange={(e) => setText(e.target.value)}/>
                <button type="button" onClick={ConvertToZigZag}>Submit</button>
                <p>Output: {result}</p>
            </form>
        </div>
    )
}

export default ZigZagStringConverter;