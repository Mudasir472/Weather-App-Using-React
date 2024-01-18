import "./weather.css";

import searchlogo from "./Images/searchlogo.png";
import clear from "./Images/clear.png"
import clouds from "./Images/clouds.png"
import humidity from "./Images/humidity.png"
import rain from "./Images/rain.png"
import wind from "./Images/wind.png"
import snow from "./Images/snow.png"

export default function Weather() {
    const key = "f634287f84a79f43c525ae43174f76d6";
    const search = async () => {
        const getLocation = document.querySelector(".getactualLocation");
        console.log(getLocation.value);
        if (getLocation.value === "") {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${getLocation.value}&appid=${key}&units=metric`
        let responce = await fetch(url);
        let data = await responce.json();

        let location = document.querySelector(".loc");
        let humidity = document.querySelector(".hum");
        let wind = document.querySelector(".wid");
        let temperature = document.querySelector(".temperature");
        // let feelsLike = document.querySelector(".feelsLike");

        humidity.innerHTML = data.main.humidity;
        location.innerHTML = data.name;
        wind.innerHTML = data.wind.speed;
        temperature.innerHTML = data.main.temp;
        // feelsLike.innerHTML = data.main.feels_like
    }


    return (
        <>
            <div className="weather-app">
                <div className="weather">
                    <div className="heading">
                        <h3>My Weather App</h3>
                    </div>
                    <div className="inputs">
                        <div className="getLocation">
                            <input type="text" className="getactualLocation" placeholder="Location" />
                        </div>
                        <i class="bi bi-search-heart"></i>
                        <div onClick={search} className="search">
                            <img src={searchlogo} alt="" />
                        </div>

                    </div>
                    <div className="mainBody">
                        <div className="body1">
                            <div className="image">
                                <img src={clear} alt="" />
                            </div>
                            <div className="Temp">
                                <span><h2 className="temperature">21</h2></span><span><h2>°C</h2></span>
                            </div>
                            <div className="Location">
                                <h2 className="loc">Hyderabad</h2>
                            </div>
                        </div>
                        <div className="body2">
                            <div className="humidity">
                                <div className="humImage">
                                    <img src={humidity} alt="" />
                                </div>
                                <div className="humDisc">
                                    <div className="notOk"><h3 className="hum">74</h3><span><h3>%</h3></span></div>
                                    <h5>Humidity</h5>
                                </div>
                            </div>
                            <div className="humidity">
                                <div className="windImage">
                                    <img src={wind} alt="" />
                                </div>
                                <div className="windDisc">
                                    <div className="ok"><h3 className="wid">5.14</h3><span><h3>km/h</h3></span></div>
                                    
                                    <h5>Wind</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}