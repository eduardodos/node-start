import express, { response } from 'express'

const app = express()

app.get('/', (_req, res) => {
  return res.json({ message: 'Acredite em seu potencial, vc é lgal' })
})

app.listen(3333, () => {
  console.log('Server started on port 3333')
})
