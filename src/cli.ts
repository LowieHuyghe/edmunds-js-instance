import { bootstrap } from './bootstrap/app'
import Kernel from './app/console/kernel'

(async (): Promise<void> => {

  const edmunds = await bootstrap()
  const kernel = new Kernel(edmunds)

  try {
    await kernel.run()
  } catch (err) {
    edmunds.logger.error(err)
  } finally {
    await edmunds.exit()
  }

})().catch(console.error)
