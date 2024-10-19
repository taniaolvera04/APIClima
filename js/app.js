const consultarAPI=async()=>{

    var ciudad=document.getElementById("ciudad").value;
    var pais=document.getElementById("pais").value;
    const apikey="8c7b1b2e8ec58d16f10bd3503bd0a18e";
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apikey}&units=metric&lang=es`);
    const json=await response.json();
    console.log(json);

    const {name, main, timezone, weather}=json;

    document.getElementById("divResultado").innerHTML=`
    <br>
    <div class="text-center">
    <h1>RESULTADO</h1>
    <p>CIUDAD: <b>${name}</b></p>
    <h4>${weather[0].description.toUpperCase()}</h4>
    <img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" width="100px" height="100px">
    <p> <b>${main.temp} C°</b> </p>
    <p> MIN: <b>${main.temp_min} C°</b> </p>
    <p> MAX: <b>${main.temp_max} C°</b> </p>
    <p> PRES: <b>${main.pressure}</b> </p>
    <p> HUM: <b>${main.humidity}%</b> </p>
    <p> UTC <b>${parseInt(timezone)/3600}</b> </p>

    </div>
    <br>
    `;
}



