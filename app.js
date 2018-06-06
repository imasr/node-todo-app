const yargs = require('yargs')
const notes = require('./notes');
var geocode = require('./geolocation/geolocation');
var whethercode = require('./whether/whether');

const args=yargs.argv;
const address =encodeURIComponent(args._[0])
geocode.getfullLocationDetail(address, res =>{
    console.log(res)
    if(res){
        whethercode.getWhether(res.lat, res.lng, response =>{
            console.log(response.currently)
        })
    }
    
})