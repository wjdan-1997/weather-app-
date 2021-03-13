import Check_display from './submit.js'
const Url = "https://api.openweathermap.org/data/2.5/weather?zip=";
const api_Key = "&appid=d962862dddca2d0427bb9f01a032cd06";
const submit_Btn = document.querySelector('#generate')

let d_ = new Date();
let new_Date = d_.getMonth() + '.' + d_.getDate() + '.' + d_.getFullYear();

submit_Btn.addEventListener('click', (w) => {
    w.preventDefault();
    console.log("Event work");
    const zipCode = document.getElementById('zip').value; 
    const textArea = document.getElementById('feelings').value; 

     getData(Url, zipCode, api_Key) //return resData
     
    .then((resData) =>{
        const [country_name , data_Time, Country, tempr, Weather,feelings]= document.querySelectorAll('li')
        data_Time.textContent= new_Date
        feelings.textContent= textArea
        country_name.textContent= resData.name
        Country.textContent=  resData.sys.country 
        tempr.textContent=resData.main.temp
        Weather.textContent= resData.weather[0].main
    })

    Check_display(zipCode)
}); 


async function getData(url, zipCode, api_Key) {
    console.log('start getting data')
        // bring all data and the input value 
    const req = await fetch(url + zipCode + api_Key);
    console.log("the requiset", req, "hereeeeee");
    try {
        const resData = await req.json();
        // data as json type 
        console.log("the response ", resData);
        // this function return resData will use in .then ()
        return resData
    } catch (error) {
        console.log("error", error);
    }

};

