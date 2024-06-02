import InfoBox from "./InfoBox.jsx"
import { useState } from "react";
import SearchBox from "./SearchBox.jsx"
import "./WeatherApp.css"
export default function WeatherApp() {
    const [weatherInfo, setweatherInfo] = useState({
        city: "Search City",
        temp: 0,
        minTemp: 0,
        maxTemp: 0,
        humidity: 0,
        feelsLike: 0,
        weather: "?",
    });
    let updateInfo = (newInfo) => {
        setweatherInfo(newInfo);
    }
    return (
        <div className="main" style={{ textAlign: "center" }}>
            <h1>Weather App</h1>
            <br /><br />
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}