import { greeting } from './greeting.js'
import { develop } from './develop.js'
import { finish } from './finish.js'

export function RouteMessages (message, user) {
  if (message.quick_reply != undefined) {
    switch (message.quick_reply.payload) {
      case 'TO_DEVELOP':
        return develop(user)
        break;
      case 'FINISH':
        return finish(user)
        break;
      default:
        return greeting(user)
        break;
    }
  } else {
    return greeting(user)
  }
}
