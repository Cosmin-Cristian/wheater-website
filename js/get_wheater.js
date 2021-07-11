var api_key = "1d9b5c3606cb374eb6bab6b3e11b9a92"

function httpGet(url) {
    var request = new XMLHttpRequest();
    request.open( "GET", url, false ); // false for synchronous request
    request.send( null );
    return request.responseText;
}

document.getElementById("table").style.display = 'none'
document.getElementById("status").innerHTML = null
    
function show_temp() {
    let city = document.getElementById("city").value
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.replace(" ", "+")}&appid=${api_key}`

    console.log(city);

    var data = httpGet(url)
    data = data.toString()
    data = JSON.parse(data)

    if (data.cod == 200) {
        document.getElementById("table").style.display = 'block'
        document.getElementById("status").innerHTML = null 
        let degrees = Math.round(data['main']['temp'] - 273.15)
        let humidity = data['main']['humidity'] + "%" 
        let wind_speed = Math.round(data['wind']['speed'] * 3.6)

        document.getElementById("degrees").innerHTML = degrees + " °C"
        document.getElementById("humidity").innerHTML = humidity
        document.getElementById("wind_speed").innerHTML = wind_speed + ` km \\ h`
        document.getElementById("wheater_title").innerHTML = `Wheater in ${city}`      
    } else {
        document.getElementById("table").style.display = 'none'
        document.getElementById("wheater_title").innerHTML = null
        document.getElementById("status").innerHTML = `City '${city}' doesn't exist.`
        document.getElementById("city").value = ""
    }
}