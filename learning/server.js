const express = require('express')
const app = express()
const port = 3000

app.use('/demo',express.static('public'))
app.use(express.static('node_modules'))
app.use(express.static('dist'))
var bodyParser = require('body-parser')

/*
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});*/

app.get('/test', (req, res) => {
 var data = {'content':'Hello World!'}
  res.send(data)
})

app.post('/add', bodyParser.json(),function (req, res) {
  var body = JSON.stringify(req.body);
  var quey = JSON.stringify(req.query);
  console.log(`BODY: ${body}`);
  console.log(`Query ${quey}`)
  res.send(body)
})

app.put('/update/:newName', bodyParser.json(), function (req, res) {
  var params = JSON.stringify(req.params);
  console.log(`param: ${params}`);
  res.send(params)
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))