// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Dependencies */

// Cors for cross origin allowance
const cors = require('cors'); // the connection between the client and server 
app.use(cors());

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false })); // check for data type , extended:false , just accept json type
app.use(bodyParser.json()); // data type is json()




// Initialize the main project folder
app.use(express.static('website'));

//PORT
const port = 2336;
// Setup Server
const serverRunning = app.listen(port, () => {
    console.log(`the server its running on port ${port}`);
})

//const url = "http://127.0.01:2336/all";




//route

// Method GET :Bring All Data 
app.get('/all', allData)
    //callback function 
function allData(req, res) {
    res.send(projectData);
}

// Methode POST : Add New Data
app.post('/add', newData);
//callback function
function newData(req, res) {
    data = [
        projectData['dateTime'] = req.body.dateTime,
        projectData['temp'] = req.body.temp,
        projectData['cityName'] = req.body.cityName,
        projectData['person_res'] = req.body.person_res,
        projectData['country'] = req.body.country,
        projectData['weather'] = req.body.weather,
    ]
    projectData[data]; // push data in projectData {} fetch data from body 
    res.send(projectData);
};