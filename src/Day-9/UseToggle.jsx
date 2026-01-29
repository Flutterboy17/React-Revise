import { useState } from "react"

/// Step 1: create custom hook
const useToggle = (initialValue = false) => {

    /// Step 2: create internal state
    const [value, setValue] = useState(initialValue)

    /// Step 3: toggle function
    const toggle = () => {
        setValue(prev => !prev)
    }

    /// Step 4: return what component needs
    return [value, toggle]
}

export default useToggle
