import { Controller } from 'edmunds'
import { NextFunction } from 'express'

export default class RouteNotFoundController extends Controller {
  /**
   * Get 404
   * @param {any} params
   * @param {NextFunction} next
   */
  get404 (params: any, next: NextFunction) {
    this.response.status(404)

    // respond with html page
    if (this.request.accepts('html')) {
      this.response.render('error', { error: 'Not found' })

    // respond with json
    } else if (this.request.accepts('json')) {
      this.response.send({ error: 'Not found' })

    // default to plain-text
    } else {
      this.response.type('txt').send('Not found')
    }
  }
}
