function validateForm() {
    var name = document.getElementById("name").value;
    var mail = document.getElementById("mail").value;
    var tel = document.getElementById("tel").value;
    var message = document.getElementById("yazi").value;

    if (name == "" || mail == "" || tel == "" || message == "") {
        alert("Lütfen tüm alanları doldurun.");
        return false;
    }

    var mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!mail.match(mailRegex)) {
        alert("Lütfen geçerli bir e-posta adresi girin.");
        return false;
    }

    var telRegex = /^[0-9]+$/;
    if (!tel.match(telRegex)) {
        alert("Telefon numarası sadece rakamlardan oluşmalıdır.");
        return false;
    }

    return true;
}
//API
 
const url='https://api.openweathermap.org/data/2.5/'
const key='e6ce997500c3a03b76607776682821fd'

const setQuery=(e)=>{
    if(e.keyCode=='13')
        getResult(searchBar.value)
}

const getResult=(cityName)=>
    {
       let query=`${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
       fetch(query)
       .then(weather=>{
        return weather.json()
       })
       .then(displayResult)
    }
    const displayResult=(result)=>{
        let city=document.querySelector('.city')
        city.innerText=`${result.name}, ${result.sys.country}`

        let temp=document.querySelector('.temp')
        temp.innerText=`${Math.round(result.main.temp)}°C`

        let desc=document.querySelector('.desc')
        desc.innerText=result.weather[0].description

        let minmax=document.querySelector('.minmax')
        minmax.innerText=`${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}`
    }

const searchBar=document.getElementById('searchBar')
searchBar.addEventListener('keypress',setQuery)