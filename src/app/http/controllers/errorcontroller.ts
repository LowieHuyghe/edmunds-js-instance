import { Controller } from 'edmunds'
import { NextFunction } from 'express'

export default class ErrorController extends Controller {
  /**
   * Get 500
   * @param {any} params
   * @param {NextFunction} next
   */
  getError ({ error: Error }: any, next: NextFunction) {
    this.response.status(500)

    // respond with html page
    if (this.request.accepts('html')) {
      this.response.render('error', { error: 'Internal Server Error' })

    // respond with json
    } else if (this.request.accepts('json')) {
      this.response.send({ error: 'Internal Server Error' })

    // default to plain-text
    } else {
      this.response.type('txt').send('Internal Server Error')
    }
  }
}
