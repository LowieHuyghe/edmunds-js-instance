import { ErrorMiddleware } from 'edmunds'
import { NextFunction } from 'express'

export class Handler extends ErrorMiddleware {
  /**
   * Handle the error
   * @param {Error} err The error
   * @param {NextFunction} next The next middleware to call
   * @returns {void}
   */
  handle (err: Error, next: NextFunction): void {
    if (this.edmunds.logger) {
      this.edmunds.logger.error('', err)
    }
    next(err)
  }
}
