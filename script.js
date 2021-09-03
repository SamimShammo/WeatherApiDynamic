// const weather = () => {
//     const weather = document.getElementById('weatherInput')
//     const weatherInput = weather.value;
//     const myKey = "b22aec4d48ab1a56c8e2645e8b8ddc4f"
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weatherInput}&units=metric&appid=${myKey}`)
//         .then(res => res.json())
//         .then(data => weatherGet(data))
// }

// // weather()

// const weatherGet = data => {
//   console.log(data)
//     const weatherName = document.getElementById('weatherContainer')
//     weatherName.textContent = '';
//     const div = document.createElement('div')
//     div.innerHTML = `
//     <div class="weather-status text-white text-center" >
//      <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="">
//        <h1>${data.name}</h1>
//      <h3><span>${data.main.temp}</span>&deg;C</h3>
//      <h1 class="lead">Clouds</h1>
//    </div>`
//    weatherName.appendChild(div)
// }


const API_KEY = 'b22aec4d48ab1a56c8e2645e8b8ddc4f'
const weather = () =>{
    const city= document.getElementById('weatherInput').value;
    document.getElementById('weatherInput').value='';
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
     
     fetch(url)
     .then(res => res.json())
     .then(data => getData(data))
     
} 

const setWeather = (city, text) =>{
  document.getElementById(city).innerText = text;
  
}

const getData = data => {
  console.log(data)
  setWeather('city', data.name)
  setWeather('temp', data.main.temp)
  setWeather('clouds', data.weather[0].description)
  // set weather icon 

  const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  const setA = document.getElementById('imgWeather');
  setA.setAttribute('src', url)
  

}
