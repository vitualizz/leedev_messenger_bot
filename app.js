const express = require('express');
const bodyParser = require('body-parser')
const request = require('request')
const access_token = process.env.ACCESS_TOKEN_FACEBOOK_MESSENGER
const app = express();

app.set('port', (process.env.PORT || 4000));
app.use(bodyParser.json());
app.get('/', function(req, response){
  response.send('Hola Mundo');
})

app.listen(app.get('port'), () => {
  console.log('Nuestro servidor esta funcionando en el puerto', app.get('port'));
})
