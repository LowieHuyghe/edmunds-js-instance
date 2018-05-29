import { Controller } from 'edmunds'
import { NextFunction } from 'express'

export default class HomeController extends Controller {
  /**
   * Get Index
   * @param {any} params
   * @param {NextFunction} next
   */
  getIndex (params: any, next: NextFunction) {
    this.response.json({
      message: 'Hello World!',
      app: this.edmunds.config.get('app.name')
    })
  }
}
