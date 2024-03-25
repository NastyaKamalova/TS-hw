import { user, weather, city } from "./db"

interface UserType {
    name: string;
    surname: string;
    age: number;
}
interface CityType {
    light: string;
    country: string;
    population: number;
    europe: true | "yes";
}

interface WeatherType {
    light: string;
    sky: string;
    cold: boolean;
    temperature: number;
}



type GetUserFn = () => Promise<UserType>;
const getUser: GetUserFn = async() => user;

type GetCityFn = () => Promise<CityType>;
const getCity: GetCityFn = async() => city;

type GetWeatherFn = () => Promise<WeatherType>;
const getWeather: GetWeatherFn = async() => weather;


export {getUser, getCity, getWeather}
export type {WeatherType, UserType, CityType}