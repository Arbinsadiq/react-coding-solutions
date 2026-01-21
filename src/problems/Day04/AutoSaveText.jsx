import { useEffect, useState } from "react";
import "./AutoSaveText.css";

const AutoSaveText = () => {
    const [ text, setText] = useState("");

    useEffect(() => {
        const saved = localStorage.getItem("autosave-text");
        if(saved){
            setText(saved);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("autosave-text", text);
    }, [text]);

    const ClearText = () => {
        setText("");
        localStorage.removeItem("autosave-text");
    }
    return (
        <div>
            <h1>Auto Save Text</h1>
            <form>
                <label htmlFor="text">Name:</label>
                <input type="text" vale={text} onChange={(e) => setText(e.target.value)} />
                <button onClick={() => ClearText()}>Clear</button>
            </form>
        </div>
    )
}

export default AutoSaveText;