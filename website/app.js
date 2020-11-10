/* Global Variables */
const url = "http://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = "&appid=d962862dddca2d0427bb9f01a032cd06";
const submitBtn = document.querySelector('#generate');
projectData = {}
    //console.log('Global Variables', zipCode , textArea,  );

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

///Evene Listening 
submitBtn.addEventListener('click', (w) => {
    w.preventDefault();
    console.log("EventListen its work");
    const zipCode = document.getElementById('zip').value; // take input value 
    const textArea = document.getElementById('feelings').value; // take input value

    getData(url, zipCode, apiKey) // return resData

    .then((resData) => {
        ubdateData('http://127.0.0.1:2336/all');

        return resData
    })

    .then(async function(resData) {
        //add data 
        fun = resData
        await postData('http://localhost:2336/add', {
            dateTime: newDate,
            temp: resData.main.temp,
            cityName: resData.name,
            country: resData.sys.country,
            person_res: textArea,
            weather: resData.weather[0].description
        })

        return fun

    })

});
// this function wiil work when the user click on submit botton 

/* Function to GET Web API Data*/
async function getData(url, zipCode, apiKey) {
    console.log('start getting data')
        // bring all data and the input value 
    const req = await fetch(url + zipCode + apiKey);
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
/* Function to POST data */
const postData = async(url = '', data = {}) => {
    const req = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const res = await req.json();
        console.log(" post: date ,temp person_feel, country ", res, "Done");
        return res
    } catch (error) {
        console.log("error", error);
    }

}


const dateTime = document.querySelector('#dateTime');
const temp = document.querySelector('#temp');
const content = document.querySelector('#person_res');
const cityName = document.querySelector('#city');
const country = document.getElementById('country');
const weather = document.getElementById('weather');
const ubdateData = async(url) => {
    const reqUpdate_Data = await fetch(url);

    try {

        resUpdate_Data = await reqUpdate_Data.json();
        dateTime.textContent = resUpdate_Data.dateTime;
        temp.textContent = resUpdate_Data.temp;
        content.textContent = resUpdate_Data.person_res;
        cityName.textContent = resUpdate_Data.cityName;
        country.textContent = resUpdate_Data.country;
        weather.textContent = resUpdate_Data.weather;
        console.log(" update working ", resUpdate_Data);
    } catch (error) {
        console.log("error", error);
    };
};