import { Application } from 'edmunds'
import { route } from '../app/http/routes'

export function bootstrap (): Application {
  const app = new Application()

  // Add the routes
  route(app)

  return app
}
