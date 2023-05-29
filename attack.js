const express = require('express');
const fs = require("fs");

const app = express()
app.get('/' , (req,res) => {
    fs.readFile('./attack.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
});


app.listen(9000)
console.log("running : http://localhost:9000/")