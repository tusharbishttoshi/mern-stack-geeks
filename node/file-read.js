const fs = require('fs');
fs.readFile('calc.js', 'utf8', function(err,data){
    console.log(data);
});