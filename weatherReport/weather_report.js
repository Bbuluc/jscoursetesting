function showweatherDetails(event) {
    event.preventDefault();

    // Get city input value
    const city = document.getElementById('city').value;

    // Define API key and URL
    const apiKey = 'f0bb76a98b4f58214e4332dcaa1e3791'; // Replace with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Fetch weather data
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`City not found: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            // Display weather info
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                     <p>Temperature: ${data.main.temp} &#8451;</p>
                                     <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            // Handle errors
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
        });
}

// Add event listener for form submission
document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);
