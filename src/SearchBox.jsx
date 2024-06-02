import "./SearchBox.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "275341ba5aca97a3a3f08c222d6d92bf";
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            if (jsonResponse.cod !== "404") {
                let result = {
                    city: city,
                    temp: jsonResponse.main.temp,
                    minTemp: jsonResponse.main.temp_min,
                    maxTemp: jsonResponse.main.temp_max,
                    humidity: jsonResponse.main.humidity,
                    feelsLike: jsonResponse.main.feels_like,
                    weather: jsonResponse.weather[0].description,
                };
                console.log(result);
                return result;
            } else {
                throw new Error('City not found');
            }
        } catch (err) {
            throw err;
        }
    }

    let handleChange = (evt) => {
        setCity(evt.target.value);
        if (error) {  // Clear the error when the user starts typing again
            setError(false);
        }
    }

    let handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setCity(""); // Reset the city input after successful fetch
        } catch {
            setError(true);
        }
    };

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <Button color="success" id="button" type="submit" variant="contained">
                    Search
                </Button>
                {error && <p style={{ color: "red" }}>No such City Found!</p>}
            </form>

        </div>
    );
}
