import { bootstrap } from './bootstrap/app'

const app = bootstrap()
app.express.listen(3000, (err: Error) => {
  if (err) {
    return console.error(err)
  }
  return console.log(`Running on http://localhost:3000`)
})
