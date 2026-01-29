import { useState, useEffect } from "react"

/// Step 1: custom hook for weather logic
const useWeather = (city) => {

    /// Step 2: create states
    const [weather, setWeather] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    /// Step 3: run effect when city changes
    useEffect(() => {

        /// Step 4: guard clause (no city yet)
        if (!city) return

        /// Step 5: async fetch function
        const fetchWeather = async () => {
            setLoading(true)
            setError(null)

            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=KEY`
                )

                if (!response.ok) {
                    throw new Error("City not found")
                }

                const data = await response.json()
                setWeather(data)

            } catch (err) {
                setError(err.message)
                setWeather(null)
            } finally {
                setLoading(false)
            }
        }

        fetchWeather()

    }, [city])

    /// Step 6: return clean API
    return { weather, loading, error }
}

export default useWeather
