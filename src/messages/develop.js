export const develop = (user) => {
  return {
    "recipient": {
      "id": user.id
    },
    "message": {
      "text": `Genial, estaria super cool programar un rato, pásame tu email, N° Teléfono o dejame un mensaje`,
      "quick_replies": [{
        "content_type": "user_phone_number"
      },{
        "content_type": "user_email"
      }]
    }
  }
}
