import express from 'express'
import path from 'path'

const app = express()
const port = process.env.PORT || 5000

app.use(express.static(path.resolve('../client/build')))

app.get('*', (req, res) => {
  res.sendFile(path.resolve('../client/build/index.html'))
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})