import { bootstrap } from './bootstrap/app'
import * as http from 'http'
import * as terminus from '@godaddy/terminus'

(async (): Promise<void> => {

  const port = process.env.NODE_PORT || 3000
  const edmunds = await bootstrap()

  try {
    const server = http.createServer(edmunds.app)

    terminus(server, {
      onSignal: edmunds.exit.bind(edmunds),
      logger: edmunds.logger
    })

    await new Promise((resolve, reject) => {
      server.listen(port, (err: Error) => err ? reject(err) : resolve())
    })

    edmunds.logger.info(`Running on http://localhost:${port}`)
  } catch (err) {
    edmunds.logger.error(err)
  }

})().catch(console.error)
