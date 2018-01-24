import {
  Edmunds,
  LoggingServiceProvider
} from 'edmunds'
import { route } from '../app/http/routes'
import { Handler } from '../app/errors/handler'
import * as errorHandler from 'errorhandler'
import * as bodyParser from 'body-parser'

export function bootstrap (): Edmunds {
  const edmunds = new Edmunds()

  // Service Providers
  edmunds.register(LoggingServiceProvider)

  // Body parser
  edmunds.app.use(bodyParser.json())

  // Add the routes
  route(edmunds)

  // Error handling
  if (edmunds.isDevelopment()) {
    edmunds.app.use(errorHandler())
  }
  edmunds.app.use(Handler.func())

  return edmunds
}
