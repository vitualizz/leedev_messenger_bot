const request = require('request')
const sr = require('sync-request')
const access_token = process.env.ACCESS_TOKEN_MESSENGER

const getUser = (userId) => {
  const res = sr('GET', `https://graph.facebook.com/${userId}`, {
    'qs': {
      'fields': 'name',
      'access_token': access_token
    }
  })
  return JSON.parse(res.getBody('utf8'))
}

function handleEvent(senderId, event) {
  const current_user = getUser(senderId)
  if (event.message) {
    // handleMessage(senderId, event.message);
    const test = {
      "recipient": {
        "id": senderId
      },
      "message": {
        "text": `Hola ${current_user.name}, soy un bot de messenger creado por LeeDev, suerte y que tu código funcione :D`,
        "quick_replies": [{
          "content_type": "text",
          "title": "¡Vamos a programar!",
          "payload": "ABOUT_PAYLOAD"
        },{
          "content_type":"user_phone_number"
        },{
          "content_type": "user_email"
        }]
      }
    }
    callSendApi(test)
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
    console.log(err)
  })
}

export { handleEvent }
