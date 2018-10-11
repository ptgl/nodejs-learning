const express = require('express')
const app = express()
const port = 3000

app.use('/demo',express.static('source-code'))
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

app.listen(port, () => console.log(`Example app listening on port ${port}!`))