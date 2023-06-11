const { log } = require('console');
const http = require('http');

const server = http.createServer((req,res) => {
    res.write("welcome to node js")
    res.end()
    console.log("code run")
}).listen(9009);