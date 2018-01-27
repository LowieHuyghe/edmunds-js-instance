import { bootstrap } from './bootstrap/app'

bootstrap().then((edmunds) => {
  edmunds.app.listen(3000, (err: Error) => {
    if (err) {
      return console.error(err)
    }
    return console.log(`Running on http://localhost:3000`)
  })
})
