import { useState } from "react"

/// Step 1: create SearchBar component
const SearchBar = ({ onSearch }) => {

    /// Step 2: local state for input field
    const [city, setCity] = useState("")

    /// Step 3: handle form submit
    const handleSubmit = (event) => {
        event.preventDefault()

        /// Step 4: guard clause (empty input)
        if (!city.trim()) return

        /// Step 5: send city to parent
        onSearch(city)

        /// Step 6: optional - clear input
        setCity("")
    }

    return (
        /// Step 7: form handles submit
        <form onSubmit={handleSubmit}>

            {/* /// Step 8: controlled input */}
            <input
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />

            {/* /// Step 9: submit button */}
            <button type="submit">
                Search
            </button>

        </form>
    )
}

export default SearchBar
