import { Edmunds } from 'edmunds'
import HomeController from './controllers/homecontroller'
import RouteNotFoundController from './controllers/routenotfoundcontroller'

/**
 * Add the routes
 * @param {Edmunds} edmunds
 */
export function route (edmunds: Edmunds) {
  edmunds.app.get('/', HomeController.func('getIndex'))

  // 404
  edmunds.app.get('*', RouteNotFoundController.func('get404'))
}
