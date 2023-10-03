import React from 'react'

function ToogleButton({ leftText, rightText, on, handleClick }) {
    return (
        <div onClick={handleClick} className='flex flex-row justify-between gap-0.5 border rounded-full w-40 sm:w-56 md:w-72 bg-gray-200 p-0.5 '>
            <div className={`w-[50%] flex items-center justify-center p-2 max-sm:p-1 max-sm:text-[12px] rounded-s-full font-semibold font-montserra  transition duration-200 ease-in ${leftText === on ? ' bg-orange-500' : 'text-black'}`}>{leftText}</div>
            <div className={`w-[50%] flex items-center justify-center p-2 max-sm:p-1 max-sm:text-[12px]  rounded-e-full font-semibold font-montserra  transition duration-200 ease-in ${rightText === on ? ' bg-orange-500' : 'text-black'}`}>{rightText}</div>
        </div>
    )
}

export default ToogleButton;