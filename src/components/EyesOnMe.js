// Code EyesOnMe Component Here
import React from 'react'

function handleFocus(event) {
    console.log('Good!', event);
}

function handleBlur(event) {
    console.log("Hey! Eyes on me!", event);
}


export default function EyesOnMe() {
    return (
        <div>
            <button onFocus={(e) => handleFocus(e)} onBlur={(e) => handleBlur(e)} type='button'>Eyes on me</button>
        </div>
    )
}
