const options = {
	method: 'GET',
	headers: {
	  'X-RapidAPI-Key': 'b5adac5452msh652aa0f7a31e761p145befjsn64307e00b875',
	  'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
  };
  
  async function getWeather(city) {
	try {
	  document.getElementById('cityName').innerHTML = city;
	  const response = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options);
	  const result = await response.json();
	  console.log(result);
  
	  document.getElementById('temp').innerHTML = result.temp;
	  document.getElementById('min_temp').innerHTML = result.min_temp;
	  document.getElementById('max_temp').innerHTML = result.max_temp;
	  document.getElementById('humidity').innerHTML = result.humidity;
	  document.getElementById('feels_like').innerHTML = result.feels_like;
	  document.getElementById('wind_speed').innerHTML = result.wind_speed;
	  document.getElementById('wind_degrees').innerHTML = result.wind_degrees;
	  document.getElementById('sunrise').innerHTML = result.sunrise;
	  document.getElementById('sunset').innerHTML = result.sunset;
	} catch (error) {
	  console.error(error);
	}
  }
  
  document.getElementById('submit').addEventListener('click', (event) => {
	event.preventDefault();
	const city = document.getElementById('city').value;
	getWeather(city);
  });
  
  // Initial call to display weather for Delhi
  getWeather('Delhi');
  