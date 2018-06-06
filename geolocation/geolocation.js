var request = require('request');
let getfullLocationDetail=(address, callback) => {
    request(
        {
            url:`https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
            json: true
        },  (error, response, body) => {
            if(body && body.results.length>0){
                callback(body.results[0].geometry.location); // Print the HTML for the Google homepage.
            } else{
                console.log('errr', error); // Print the error if one occurred
                console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            }
        });
}
module.exports={
    getfullLocationDetail
}
