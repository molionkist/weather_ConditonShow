const API_key = `46ad7457603b9b0104e633e78cd60e16`;

const searchTemperature = () => {
    const cityname = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_key}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}

const setInnerText = (id, Text) => {
    document.getElementById(id).innerText = Text;
}

const displayTemperature = Temperature => {
    setInnerText('city', Temperature.name);
    setInnerText('temperature', Temperature.main.temp);
    setInnerText('condition', Temperature.weather[0].main);
    const url = `https://openweathermap.org/img/wn/${Temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}
