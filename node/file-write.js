const fs = require('fs');
fs.writeFile('write-demo.js', "console.log('hello')", function(err){
    console.log('data saved');
});