import { Controller } from 'edmunds'
import {
  Request,
  Response
} from 'express'

export class HomeController extends Controller {
  /**
   * Get Index
   * @param {Request} req
   * @param {Response} res
   */
  getIndex (req: Request, res: Response) {
    res.json({
      message: 'Hello World!'
    })
  }
}
