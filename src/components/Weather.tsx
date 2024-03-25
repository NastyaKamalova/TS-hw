import type { WeatherType } from "../api/api";

interface WeatherProps {
    weather: WeatherType | null
}

const Weather = ({ weather }: WeatherProps ) => {
    return(
        <>
        <h1>Weather Page</h1>
        {
            !weather ? (
                <>loading...</>
            ) : (
                <>
                    <div>light: {weather.light}</div>
                    <div>sky: {weather.sky}</div>
                    <div>cold: {weather.cold}</div>
                    <div>temperature: {weather.temperature}</div>
                </>
            )
        }

        </>
    )
}

export default Weather;