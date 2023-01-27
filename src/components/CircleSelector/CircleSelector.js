import './CircleSelector.css'
import { useState } from 'react'

export default function CircleSelector({numCircle, circle}) {
//  const [selectCircle, setSelectCircle] = useState("1")

    function handleClick(evt) {
        numCircle(evt.target.value)
    }

    function handleChange() {
        // numCircle(selectCircle)
    }


    return(
        <div className='CircleSelector'>
            <button className={circle === "1" ? 'selected' : null} value="1" onClick={handleClick}>{circle === "1" ? 'CIRCLE 1 SELECTED' : 'SELECT CIRCLE 1'}</button>
            <button className={circle === "2" ? 'selected' : null} value="2" onClick={handleClick}>{circle === "2" ? 'CIRCLE 2 SELECTED' : 'SELECT CIRCLE 2'}</button>
            <button className={circle === "3" ? 'selected' : null} value="3" onClick={handleClick}>{circle === "3" ? 'CIRCLE 3 SELECTED' : 'SELECT CIRCLE 3'}</button>
            <button className={circle === "4" ? 'selected' : null} value="4" onClick={handleClick}>{circle === "4" ? 'CIRCLE 4 SELECTED' : 'SELECT CIRCLE 4'}</button>
        </div>
    )
}