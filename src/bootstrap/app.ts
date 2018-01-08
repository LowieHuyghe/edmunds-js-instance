import { Edmunds } from '../../../edmunds-js/dist/index'
import { route } from '../app/http/routes'

export function bootstrap (): Edmunds {
  const edmunds = new Edmunds()

  // Add the routes
  route(edmunds)

  return edmunds
}
