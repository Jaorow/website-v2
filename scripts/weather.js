let WEATHER="5278a12e62154b6bbe751118231212"
let IPKey = '2a2c75309cb6033a571255d25daa151b64ad57012593816f76a9aa37'


// fetch api
function get_weather(city){
    fetch(`https://api.weatherapi.com/v1/current.json?key=${WEATHER}&q=${city}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        var temp = data.current.temp_c + "°C"
        var location = data.location.name
        var condition = data.current.condition.text
        var icon = data.current.condition.icon

        console.log(icon)

        document.getElementById("weather-div").innerHTML = `
            <span id="weather-span">
                <h1 id="weather-location">${location}</h1>
                <img id="weather-icon" src="${icon}" alt="weather-condition">
                <div id="conditions-div">
                    <h1>${temp}</h1>
                    <h3 id="condition-data">${condition}</h3>
                </div>
            </span>
        `
    })
}


// TODO: get location from ip address later 
function get_location(){
    fetch(`https://api.ipdata.co?api-key=${IPKey}`)
        .then(data => {
            console.log(data.ip);
            console.log(data.city);
            console.log(data.country_code);
        });
}

// get_location()
get_weather("Auckland")