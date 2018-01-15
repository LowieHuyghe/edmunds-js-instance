import { Edmunds } from '../../../edmunds-js/dist/index'
import { route } from '../app/http/routes'
import { Handler } from '../app/errors/handler'

export function bootstrap (): Edmunds {
  const edmunds = new Edmunds()

  // Add error handler
  edmunds.app.use(Handler.func())

  // Add the routes
  route(edmunds)

  return edmunds
}
