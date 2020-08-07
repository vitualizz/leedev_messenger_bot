export const greeting = (user) => {
  return {
    "recipient": {
      "id": user.id
    },
    "message": {
      "text": `Hola ${user.name}, soy LeeDev espero podamos ser grandes amigos y compartir muchas experiencias :D`,
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
}
