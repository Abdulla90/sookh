var express = require('express')
var app = express()

var path = require('express')
app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
  res.redirect('/view/index.html')
})

app.listen(7000, function () {
  console.log('Example app listening on port 7000!')
})