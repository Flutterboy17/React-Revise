/// Step 1: WeatherCard component
const WeatherCard = ({ weather }) => {

    /// Step 2: guard clause (safety)
    if (!weather) return null

    return (
        <div>

            {/* /// Step 3: city name */}
            <h2>{weather.name}</h2>

            {/* /// Step 4: temperature */}
            <p>Temperature: {weather.main.temp} °C</p>

            {/* /// Step 5: weather condition */}
            <p>Condition: {weather.weather[0].description}</p>

        </div>
    )
}

export default WeatherCard
