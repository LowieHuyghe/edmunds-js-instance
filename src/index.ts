import { bootstrap } from './bootstrap/app'

(async (): Promise<void> => {

  const edmunds = await bootstrap()

  edmunds.app.listen(3000, (err: Error) => {
    if (err) {
      return console.error(err)
    }
    return console.log(`Running on http://localhost:3000`)
  })

})()
  .then(() => {
    //
  })
  .catch((reason: any) => {
    console.error(reason)
  })
