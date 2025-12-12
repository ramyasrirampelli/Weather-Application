function getData() {
  let input = document.getElementById("input");
  getWeather(input.value);
}

async function getWeather(city) {
  const URL = `https://open-weather13.p.rapidapi.com/city?city=${city}&lang=EN`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "c407f356e1mshca984af48b9cdf3p1ee04djsn106c756f5139",
      "x-rapidapi-host": "open-weather13.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(URL, options);
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const result = await response.json();
    showWeather(result);
  } catch (error) {
    console.error(error);
  }
}
let div = document.getElementById("container");
function showWeather(data) {
    div.innerHTML=data.main.temp+ " °C";
}
