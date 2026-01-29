import React from 'react'
import SearchBar from './components/SearchBar'
import Loading from './components/Loading'
import Error from './components/Error'
import WeatherCard from './components/WeatherCard'
import useWeather from './hooks/UseWeather'


const Main = () => {

    /// Step 2: state for searched city
    const [city, setCity] = useState("")

    /// Step 3: call custom hook with city
    const { weather, loading, error } = useWeather(city)

    /// Step 4: handle search from SearchBar
    const handleSearch = (searchedCity) => {
        setCity(searchedCity)
    }
    return (
        <div>

            {/* /// Step 5: search input */}
            <SearchBar onSearch={handleSearch} />

            {/* /// Step 6: loading state */}
            {loading && <Loading />}



            {/* /// Step 7: error state */}
            {error && <Error message={error} />}


            {/* /// Step 8: show weather data */}
            {weather && <WeatherCard weather={weather} />}


        </div>
    )
}

export default Main