import {
  Edmunds,
  FileSystemServiceProvider,
  LoggingServiceProvider,
  DatabaseServiceProvider,
  CacheServiceProvider
} from 'edmunds'
import { route } from '../app/http/routes'
import Handler from '../app/errors/handler'
import * as errorHandler from 'errorhandler'
import * as bodyParser from 'body-parser'
import * as appRootPath from 'app-root-path'

export async function bootstrap (): Promise<Edmunds> {
  const edmunds = new Edmunds(appRootPath.path)

  // Service Providers
  await edmunds.register(FileSystemServiceProvider)
  await edmunds.register(LoggingServiceProvider)
  await edmunds.register(DatabaseServiceProvider)
  await edmunds.register(CacheServiceProvider)

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
