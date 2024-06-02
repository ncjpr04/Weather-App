import * as React from 'react';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css";


export default function InfoBox({ info }) {
    if (!info) {
        return <div>Loading...</div>;
    }

    const COLD_URL = "https://img.freepik.com/free-vector/coronavirus-pandemic-infection-symptoms_23-2148476655.jpg?t=st=1713504236~exp=1713507836~hmac=56d2163bee3ff6058513c3e362a9eed35cadaa5c91b4892786d9ef92a0b03ce7&w=740";
    const HOT_URL = "https://img.freepik.com/free-vector/flat-summer-heat-illustration-with-woman-sweating-sun_23-2149433188.jpg?t=st=1713503842~exp=1713507442~hmac=c3feca435a3b502935f4395f4a94f586568534a478d7924337fbe94d7d21fa13&w=740";
    const RAIN_URL = "https://img.freepik.com/free-vector/flat-background-monsoon-season_23-2150513391.jpg?t=st=1713504283~exp=1713507883~hmac=97a63a5fc711faa3844c83be8c6941b94fd58bc6bd57753542985f244b8bf4a4&w=740";

    return (
        <div className="main-card">
            <div className="card">
                <div className="card-content">
                    <div className='city-name temp-icon' >

                        {info.city}<> </>
                        {info.humidity > 80 ? (
                            <ThunderstormIcon />
                        ) : info.temp > 15 ? (
                            <LocalFireDepartmentIcon />
                        ) : (
                            <AcUnitIcon />
                        )}</div>

                    <div className="infoElements">
                        <div className='infoElement'>Temperature = {info.temp}°C</div>
                        <div className='infoElement'>Minimum Temperature = {info.minTemp}°C</div>
                        <div className='infoElement'>Maximum Temperature = {info.maxTemp}°C</div>
                        <div className='infoElement'>Humidity = {info.humidity}</div>
                        <div className='infoElement'>Feels Like = {info.feelsLike}°C</div>
                        <div className='infoElement ' id='last-box'>Weather = {info.weather}</div>
                    </div>
                </div>
                <div className="image">
                    {info.humidity > 80 ? (
                        <img src={RAIN_URL} alt="Rainy" />
                    ) : info.temp > 15 ? (
                        <img src={HOT_URL} alt="Hot" />
                    ) : (
                        <img src={COLD_URL} alt="Cold" />
                    )}
                </div>

            </div>
        </div>
    );
}
