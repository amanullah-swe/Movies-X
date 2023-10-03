import React from 'react'

function Navbar() {
    return (
        <div className='w-full flex justify-between items-center mt-2'>
            <h1 className='text-4xl font-bold font-palanquin max-sm:text-lg text-orange-600'>Movies-X</h1>
            <div className='flex gap-4'>
                <button className='border py-1 px-2 rounded-md '>Movies</button>
                <button className='border py-1 px-2 rounded-md '>Tv Shows</button>
            </div>
        </div>
    )
}

export default Navbar;