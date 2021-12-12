import React from 'react'
import "./Todo.css"
function Todos(props) {
    // console.log(props.id);


    return (
        <div className="Todostyle">
            <i className="fa fa-times" aria-hidden="true" onClick={() => {
                props.onselect(props.text.id)}}/>

                {/* {console.log(props.text.id)} */}
            <li >{props.text} </li>

        </div>
    )
}

export default Todos
