const path = require('path');

exports.root = (request, response, callback) => {
    console.log("GET @root/");
    response.send("http://localhost:8081");
}