import { Controller } from 'edmunds'
import { NextFunction } from 'express'

export default class HomeController extends Controller {
  /**
   * Get Index
   * @param {any} params
   * @param {NextFunction} next
   */
  getIndex (params: any, next: NextFunction) {
    // respond with html page
    if (this.request.accepts('html')) {
      this.response.render('home', { message: 'Hello World!' })

      // respond with json
    } else if (this.request.accepts('json')) {
      this.response.send({ message: 'Hello World!' })

      // default to plain-text
    } else {
      this.response.type('txt').send('Hello World!')
    }
  }
}
