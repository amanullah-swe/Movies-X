import React from 'react'

function Button({ label, fullwidth }) {
    return (
        <button className={`h-full ${fullwidth ? 'w-full' : 'w-[100px]'} bg-orange-500 border rounded-e-full`} >{label}</button>
    )
}

export default Button