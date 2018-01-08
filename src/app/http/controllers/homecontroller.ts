import { Controller } from 'edmunds'
import { NextFunction } from 'express'

export class HomeController extends Controller {
  /**
   * Get Index
   * @param {object} params
   * @param {NextFunction} next
   */
  getIndex (params: object, next: NextFunction) {
    this.response.json({
      message: 'Hello World!',
      app: this.edmunds.config.get('app.name')
    })
  }
}
