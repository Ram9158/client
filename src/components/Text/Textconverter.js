import React, { useState } from 'react'
import './Textconverter.css'

export default function Textconverter(props) {
    const [Text, settext] = useState("");
    const ConvertHandler = (event) => {

        settext(event.target.value)
    }
    const ConvertingtoUpperCase = () => {
        let newText = Text.toUpperCase()       //Uppecase
        settext(newText)
    }
    const ConvertingToLowerCase = () => {
        let newText = Text.toLowerCase()        //Lowercase
        settext(newText);
    }
    const ClearHandeler = () => {
        let newText = '';                    //ClearText
        settext(newText);
    }
    const ReverseHandeler = () => {
        let Reverse = Text.split('').reverse().join("")     //Reverse
        settext(Reverse)
    }
    return (
        <div>
            <div className="container mb-5 mt-5 my-20">
                <h1>{props.heading}</h1>

                <textarea className="form-control" placeholder='Enter Here Text' value={Text} onChange={ConvertHandler} id="exampleFormControlTextarea1" h="330px" rows="5"></textarea>

                <button type="button" onClick={ConvertingtoUpperCase} className="btn btn-secondary mt-5 mr-3" >Convert To UpperCase</button>

                <button type="button" onClick={ConvertingToLowerCase} className="btn btn-secondary  mt-5 mr-3" >Convert To LowerCase</button>

                <button type="button" onClick={ClearHandeler} className="btn btn-secondary  mt-5 mr-3" >CLEAR Text</button>

                <button type="button" onClick={ReverseHandeler} className="btn btn-secondary  mt-5 mr-3" >Reverse</button>
            </div>
            <div className="text">
                <h3>Words:   {Text.split(" ").filter(item => item).length}
                </h3>
                <h3>Characters:  {Text.length}</h3>
            </div>
        </div>

    )
};




