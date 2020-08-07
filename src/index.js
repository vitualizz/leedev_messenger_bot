import { RouteMessages } from './messages/routes.js'

const request = require('request')
const sync_request = require('sync-request')
const access_token = process.env.ACCESS_TOKEN_MESSENGER
const getUser = (userId) => {
  const res = sync_request('GET', `https://graph.facebook.com/${userId}`, {
    'qs': {
      'fields': 'id,name',
      'access_token': access_token
    }
  })
  return JSON.parse(res.getBody('utf8'))
}

function handleEvent(senderId, event) {
  if (event.message) {
    // handleMessage(senderId, event.message);
    const current_user = getUser(senderId)
    const message = RouteMessages(event, current_user)
    callSendApi(message)
  } else {
    console.log("No hay una función para esto: ", event)
  }
}

function callSendApi(response){
  request({
    "uri": "https://graph.facebook.com/me/messages/",
    "qs": {
      "access_token": access_token
    },
    "method": "POST",
    "json": response
  }, (err) => {
    if (err) console.log(err)
  })
}

export { handleEvent }
