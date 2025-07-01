
    // 1. function getWeather() {
    //     const city = document.getElementById('input-value').value;
    //     const result = document.getElementById('result');
    //     const apiKey = "";
    //     const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    //        fetch(url)
    //             .then((response) => {
    //                 return response.json();
    //             }).then((data) => {
    //                 console.log(data);
    //                 result.innerHTML = `Temperature : ${data.main.temp}
    //                                     Humidity : ${data.main.humidity}`
    //             }).catch((error) => {
    //                 console.log(error);

    //             })
    //     }

    //2. async function getWeather() {
    //     const city = document.getElementById('input-value').value;
    //     const result = document.getElementById('result');
    //     const apiKey = "";
    //     const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    //     const response = await fetch(url)
    //     const data = await response.json();
    //     result.innerHTML = `Temperature : ${data.main.temp} Humidity : ${data.main.humidity}`

    // }


    async function getWeather() {
        const city = document.getElementById('input-value').value;
        const result = document.getElementById('result');
        const apiKey = "YOUR_API_KEY_HERE";
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
          
        try{
        const response = await axios.get(url);
        result.innerHTML = `Temperature : ${response.data.main.temp}
                             <br> Humidity : ${response.data.main.humidity}`}
        catch(error){
            result.innerHTML = "City not found"
        }
 }
