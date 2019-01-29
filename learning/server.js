const express = require('express')
const axios = require('axios');
const app = express()
const port = 3000
const connectionService = require('./connection-service')

app.use(express.static('public'))
app.use(express.static('node_modules'))
app.use(express.static('dist'))
var bodyParser = require('body-parser')


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const es = 'http://localhost:9200/learning'
app.get('/getES/:link/:id', (req, res)=>{
  var params = req.params;
  var url = [es, params.link, params.id].join('/');
   console.log(url)
  connectionService.get(url)
  .then( (result) => {
      res.status(200).send(result.data._source);
  }, (err) => {
     res.status(404).send(err.status);
  });
})

app.delete('/deleteES/:link/:id', (req, res)=>{
  var params = req.params;
  var url = [es, params.link, params.id].join('/');
   console.log(url)
  connectionService.delete(url)
  .then( (result) => {
      res.status(200).send(result.status);
  }, (err) => {
     res.status(404).end();
  });
})

app.get('/getAllES/:link', (req, res)=>{
  var params = req.params;
  var url = [es, params.link, '_search'].join('/');
  console.log(url);
  connectionService.get(url)
  .then( (result) => {
    
    var hits = result.data.hits.hits;
    var resultSearch = [];
    hits.forEach(ele => {
      resultSearch.push(ele._source);
    });

      res.status(200).send(resultSearch);
  }, (err) => {
     res.status(404).end();
  });
})

app.post('/saveES/:link/:id', bodyParser.json(), (req, res)=>{
  var params = req.params;
  var body = JSON.stringify(req.body);
  var url = [es, params.link, params.id].join('/');
   console.log(url)

   connectionService.get(url).then(result=>{
     connectionService.post(url, null, body)
     .then( (result) => {
         res.status(200).send(body);
     }, (err) => {
        res.status(404).end();
     });

   }, err => {
      if(err.status == 404){
        res.send({message: 'Account doesn\'t existed'})
      }else res.status(404).end();
   })



})

app.post('/create/:link/:id', bodyParser.json(), (req, res)=>{
  
  var params = req.params;
  var body = JSON.stringify(req.body);
  var url = [es, params.link, params.id].join('/');
  console.log(url);

  connectionService.get(url)
  .then( (result) => {
      res.status(200).send({message: 'Account existed'});
  }, (err) => {
      if(err.status == 404){
        connectionService.post(url, null, body)
        .then( (result) => {
            res.status(200).send(result.status);
        }, (err) => {
           res.status(404).end();
        });
      }else
        res.status(404).send(err.status);
  });
})

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