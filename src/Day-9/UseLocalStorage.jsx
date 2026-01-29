import React, { useEffect, useState } from 'react'

/// Step 1: create custom hook
const UseLocalStorage = (key, initialValue) => {

    /// Step 2: read value from localStorage
    const storedValue = localStorage.getItem(key);

    /// Step 3: initialize state
    const [value, setValue] = useState(storedValue ? JSON.parse(storedValue) : initialValue);

    /// Step 4: save value to localStorage when it changes
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value]);

    /// Step 5: return value + setter
    return [value, setValue]
}

export default UseLocalStorage