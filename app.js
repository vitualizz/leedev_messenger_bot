const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()
import { handleEvent } from './src/index.js'

app.set('port', (process.env.PORT || 4000))
app.use(bodyParser.json())
app.get('/', (req, response) => {
  response.send('Hola Mundo')
})

app.listen(app.get('port'), () => {
  console.log('Nuestro servidor esta funcionando en el puerto', app.get('port'))
})

app.get('/webhook', (req, res) => {
  if (req.query['hub.verify_token'] == process.env.VERIFY_TOKEN){
    res.send(req.query['hub.challenge'])
  } else {
    res.send('No tiene permisos')
  }
})

app.post('/webhook', (req, res) => {
  const webhook_event = req.body.entry[0];
  if (webhook_event.messaging) {
    webhook_event.messaging.forEach(event => {
      console.log(event)
      handleEvent(event.sender.id, event)
    })
  }
  res.sendStatus(200)
})
