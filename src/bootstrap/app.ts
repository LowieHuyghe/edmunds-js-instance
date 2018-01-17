import {
  Edmunds,
  LoggingServiceProvider
} from 'edmunds'
import { route } from '../app/http/routes'
import { Handler } from '../app/errors/handler'

export function bootstrap (): Edmunds {
  const edmunds = new Edmunds()

  // Logging Service Provider
  edmunds.register(LoggingServiceProvider)

  // Add the routes
  route(edmunds)

  // Add error handler
  edmunds.app.use(Handler.func())

  return edmunds
}
