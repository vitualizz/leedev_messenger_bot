export const finish = (user) => {
  return {
    "recipient": {
      "id": user.id
    },
    "message": {
      "text": 'Demasiadas ganas de conocerte, este es un bot. Ni bien pueda te contactaré. Saludos y que tu código pase a PRD'
    }
  }
}
