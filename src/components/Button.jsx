import React from 'react'

function Button({ label, fullwidth, handleClick }) {
    return (
        <button onClick={handleClick} className={`h-full ${fullwidth ? 'w-full' : 'w-[100px]'} bg-orange-500 border rounded-e-full`} >{label}</button>
    )
}

export default Button