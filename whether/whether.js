const request = require('request');
const apiKey = require('./../config');

let getWhether=(lan, lat, callback) => {
    request(
        {
            url:`https://api.darksky.net/forecast/${apiKey.weatherKey}/${lan},${lat}`,
            json: true
        },  (error, response, body) => {
            if(body){
                callback(body); // Print the HTML for the Google homepage.
            } else{
                console.log('errr', error); // Print the error if one occurred
                console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
                callback()
            }
        });
}
module.exports={
    getWhether
}
