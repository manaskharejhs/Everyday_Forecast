let weather = {
  apikeys: "f800befabaf2a41c92d75a1e4fec38ff",
  fetchWeather: function (city) {
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apikeys
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon);
    document.querySelector(".city").innerHTML = "Weather in " + name;
    document.querySelector(".temp").innerHTML = temp + "°C";
    document.querySelector(".description").innerHTML = description;
    document.querySelector(".humidity").innerHTML = "Humidity: " + humidity;
    document.querySelector(".wind").innerHTML = "Wind Speed: " + speed + "m/s";
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + "@2x.png";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    weather.search();
  }
});
