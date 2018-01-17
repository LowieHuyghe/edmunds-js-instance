import { Edmunds } from 'edmunds'
import { HomeController } from './controllers/homecontroller'

/**
 * Add the routes
 * @param {Edmunds} edmunds
 */
export function route (edmunds: Edmunds) {
  edmunds.app.get('/', HomeController.func('getIndex'))
}
