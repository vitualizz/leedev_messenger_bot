import { greeting } from './greeting.js'

export function RouteMessages (event, user) {
  return greeting(user)
}
