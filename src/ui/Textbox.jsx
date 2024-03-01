import React from 'react'
import "./Textbox.css"

function Textbox({title, label}) {
  return (
    <div className={title+"-container"}>
        <label className={title+'-label'}>{label}</label>
        <input className={title+'-input-field'} type=''/>
    </div>
  )
}

export default Textbox