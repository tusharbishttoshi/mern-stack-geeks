const fs = require('fs');

fs.appendFile('write-demo.js','console.log("appended content hello")',function(err){

    console.log("data saved")
})
