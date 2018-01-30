import { bootstrap } from './bootstrap/app'
import { Kernel } from './app/console/kernel'

(async (): Promise<void> => {

  const edmunds = await bootstrap()
  const kernel = new Kernel(edmunds)

  try {
    await kernel.run()
  } catch (e) {
    console.error(e)
  }

})()
  .then(() => {
    //
  })
  .catch((reason: any) => {
    console.error(reason)
  })
