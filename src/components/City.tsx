import type { CityType } from "../api/api";

interface CityProps {
    city: CityType | null
}

const City = ({city}: CityProps) => {
    return(
        <>
        <h1>City Page</h1>
        {
            !city ? (
                <>loading...</>
            ) : (
                <>
                    <div>light: {city.light}</div>
                    <div>country: {city.country}</div>
                    <div>population: {city.population}</div>
                    <div>europe: {city.europe}</div>
                </>
            )
        }
        </>
    )
}

export default City;