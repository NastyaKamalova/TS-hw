import Navbar from "./components/Navbar"
import  { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import User from "./components/User";
import Weather from "./components/Weather";
import City from "./components/City";
import { useEffect, useState } from "react";
import {
  getUser, getCity, getWeather, 
  UserType, 
  CityType, 
  WeatherType
} from "./api/api";

function App() {

  const [user, setUser] = useState<UserType | null>(null)
  const [city, setCity] = useState<CityType | null>(null)
  const [weather, setWeather] = useState<WeatherType | null>(null)

  async function getProps() {
    const promises = await Promise.all([
      getUser(),
      getCity(),
      getWeather()
    ])
    setUser(promises[0])
    setCity(promises[1])
    setWeather(promises[2])
  }

  useEffect(() => {
    getProps()
  }, [])

    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/user" element={<User user={user} />}/>
                        <Route path="/weather" element={<Weather weather={weather} />}/>
                        <Route path="/city" element={<City city={city}/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;