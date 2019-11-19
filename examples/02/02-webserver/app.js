var request = require('request')

request("https://randomuser.me/api", function (error, response, body) {
    if (error) {
        // Handle error
    }
//    console.log(response);
    console.log(body);
})
