import { useState } from "react";
import "./Accordion.css";
import { items } from "./AccordionData";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; 

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }

    if(!items || items.length === 0){
        return(
        <p>No data available.</p>
        )
    }
    

    return (
        <div className="accordion">
        {items.map((item, index) => (
            <div key={index} className="accordion-item">
                <button className="accordion-title" onClick={() => handleClick(index)} >
                    {item.title}
                    {openIndex === index ? (<FaChevronUp style={{float: 'right'}} />
                    )
                     : 
                     (
                     <FaChevronDown style={{float: 'right'}}/>
                    )
                     }
                </button>
                {openIndex === index && <div className="accordion-content">
                    {item.content}
                </div>}
            </div>
        ))}
        </div>
    )
}
export default Accordion;
