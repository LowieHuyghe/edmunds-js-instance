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
    // Log the exception
    if (this.edmunds.logger) {
      this.edmunds.logger.error('', err)
    } else {
      console.error(err)
    }

    if (this.response.headersSent) {
      // Default handler when headers already sent.
      // Express will close the connection and fails the request.
      next(err)
    } else {
      // Show error response
      this.response
        .status(500)
        .json({
          success: false,
          error: 'Internal Server Error'
        })
    }
  }
}
