import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div className="flex flex-col justify-center items-center  bg-amber-100 h-screen gap-2">
            <div className='rounded-2xl bg-white p-6 shadow-md text-center text-2xl'> {count}</div>
            <div className='flex gap-2'>
                <button className="rounded bg-amber-500 text-sm px-4 py-2 font-medium text-white hover:bg-amber-600 transition cursor-pointer" onClick={() => setCount(count + 1)}>Increase</button>
                <button className="rounded bg-amber-500 text-sm px-4 py-2 font-medium text-white hover:bg-amber-600 transition cursor-pointer" onClick={() => setCount(count - 1)}>Decrease</button>
                <button className="rounded bg-amber-500 text-sm px-4 py-2 font-medium text-white hover:bg-amber-600 transition cursor-pointer" onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    )
}

export default Counter