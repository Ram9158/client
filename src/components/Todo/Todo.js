import React, { useState } from 'react'
import "./Todo.css"
import Todos from "./Todos"
function Todo() {
  const [state, setstate] = useState("")
  const [inputstate, inputsetstate] = useState([])

  const inputechangeHandeler = (e) => {
    setstate(e.target.value)
  }
  const Additem = () => {
    inputsetstate(() => {
      return [...inputstate, state]
    })
    setstate('')
  }
  const Deletedtodo = (id) => {
    // console.log(id)
    inputsetstate((olditem) => {
      let itemId = olditem.filter((index) => index.id !== id)
      // console.log(olditem)
      return itemId
    })
  }

  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1 className="head">To List</h1>
        <br />
        <input type="text" value={state} onChange={inputechangeHandeler} placeholder="Add a Items" />
        <button type="button" className="clisk" onClick={Additem}><strong>+</strong></button>
        <ol>
          {inputstate.map((itemvalue,index) => {
            return (
              <div key={index}>
                <Todos text={itemvalue}  onselect={Deletedtodo} />
              </div>
            )
          }
          )}
        </ol>

      </div>

    </div>
  )
}

export default Todo




