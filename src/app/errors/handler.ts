import { ErrorMiddleware } from 'edmunds'
import { NextFunction } from 'express'
import ErrorController from '../http/controllers/errorcontroller'

export default class Handler extends ErrorMiddleware {
  /**
   * Handle the error
   * @param {Error} err The error
   * @param {NextFunction} next The next middleware to call
   * @returns {void}
   */
  handle (err: Error, next: NextFunction): void {
    if (this.response.headersSent) {
      // Default handler when headers already sent.
      // Express will close the connection and fails the request.
      next(err)
    } else {
      const controller = new ErrorController(this.request, this.response)
      controller.getError({ error: err }, next)
    }

    // Log the exception
    if (this.edmunds.logger) {
      this.edmunds.logger.error('', err)
    } else {
      console.error(err)
    }
  }
}
