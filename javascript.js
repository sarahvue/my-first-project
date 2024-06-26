function displayTemp(response) {
  let temperatureElement = document.querySelector("#temp");
  let temperature = Math.round(response.data.temperature.current);
  let city = response.data.city;
  let country = response.data.country;
  let description = response.data.condition.description;

  temperatureElement.innerHTML = ` The temperature in ${city}, ${country}, is ${temperature} degrees, ${description}`;
}
let city = "Phoenix";
let apiKey = "ao845a73f82d076c60a25fbb55dt1569";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;

axios.get(apiUrl).then(displayTemp);
