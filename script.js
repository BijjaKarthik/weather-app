
// accessing the all elements
const locEle=document.querySelector('.search-location')
const searchBtn=document.querySelector('.search-btn')
const iconEle=document.querySelector(".weather-icon")
const desEle=document.querySelector(".description")
const tempEle=document.querySelector(".temperature")
const windEle=document.querySelector(".windspeed")
const placeEle=document.querySelector(".location")



// adding the functionality for button

let apiKey=`da9860d9a9cdb0efb86c44a528c137e8`


// adding functionality for button

searchBtn.addEventListener("click" ,(e)=>{
    let locval=locEle.value
    console.log(locval)

    if(locval===""){
        alert("enter a proper location")
    }else{


        // getting the data for weather api server and displaying it the users

        url=`https://api.openweathermap.org/data/2.5/weather?q=${locval}&appid=${apiKey}`
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)


            const {icon , description}=data.weather[0]
            const {temp}=data.main
            const {speed}=data.wind 


            iconEle.src=`https://openweathermap.org/img/wn/${icon}@2x.png`
            desEle.innerText=description
            tempEle.innerHTML=`<p>${temp} <sup>&deg;</sup> c</p>`
            windEle.innerHTML=`<p>${speed}km/h</p>`
            placeEle.innerText=data.name


        }).catch((err)=>{
            alert("not a valid location")
        })
    }
})
