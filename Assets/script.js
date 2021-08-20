let city ="dallas";
let apiKey = "2a3d8954c6392ca9a6b630b4ba0d1add";
let queryUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`
let tempElement = document.querySelector(".current-temp")
let dateEl = document.querySelector(".current-date")
let cityEl = document.querySelector(".city-name")
let humEl = document.querySelector(".current-hum")
let windEl = document.querySelector(".wind-speed")
let uiEl = document.querySelector(".UVI")


fetch(queryUrl)
.then(headers => headers.json())
.then(weatherData => {
    console.log(weatherData);
    
    let citName = weatherData.city.name
    let degrees= weatherData.list[0].main.temp;
    let date = weatherData.list[0].dt_txt;
    let citHum = weatherData.list[0].main.humidity;
    let wind = weatherData.list[0].wind.speed;
    let lon = weatherData.city.coord.lon;
    let lat = weatherData.city.coord.lat;
    
    cityEl.textContent = citName
    dateEl.textContent = date
    tempElement.textContent = degrees
    humEl.textContent = citHum
    windEl.textContent = wind 
    
    
    
    let onecallurl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}`
    console.log(onecallurl)
    
    fetch(onecallurl)
    .then(headers => headers.json())
    .then(uvdata => {
        console.log(uvdata);
        let uvi = uvdata.current.uvi
        uiEl.textContent = uvi
    })
    // youre going to need the lat and lon
    
    // you're going to make another fetch request using the lat and lon
    // using a different 
    //https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=${apiKey}
    
})

