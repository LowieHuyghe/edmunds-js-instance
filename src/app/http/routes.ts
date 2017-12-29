import { Application } from 'edmunds'
import { HomeController } from './controllers/homecontroller'

/**
 * Add the routes
 * @param {Application} app
 */
export function route (app: Application) {
  app.express.use('/', HomeController.route('getIndex'))
}
