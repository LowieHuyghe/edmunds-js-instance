import { bootstrap } from './bootstrap/app'
import * as http from 'http'
import * as terminus from '@godaddy/terminus'

(async (): Promise<void> => {

  const port = process.env.NODE_PORT || 3000
  const edmunds = bootstrap()

  try {
    const server = http.createServer(edmunds.app)

    terminus(server, {
      onSignal: edmunds.exit.bind(edmunds),
      logger: (edmunds.logger || console) as any
    })

    await new Promise((resolve, reject) => {
      server.listen(port, (err: Error) => err ? reject(err) : resolve())
    })

    if (edmunds.logger) {
      edmunds.logger.info(`Running on http://localhost:${port}`)
    } else {
      console.info(`Running on http://localhost:${port}`)
    }
  } catch (err) {
    if (edmunds.logger) {
      edmunds.logger.error(err)
    } else {
      console.error(err)
    }
  }

})().catch(console.error)
