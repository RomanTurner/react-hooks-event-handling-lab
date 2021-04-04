// Code Keypad Component Here
import React from 'react'

const changeHandler = (event) => {
    console.log('Entering password...', event.target.value);
}

export default function Keypad() {
    return (
        <div>
            <input onChange={(e) => changeHandler(e)} type='password'/>
        </div>
    )
}
