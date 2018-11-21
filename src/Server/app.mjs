import path from 'path'
import express from 'express'

const app = express()
const port = 1234

app.use(express.static(path.resolve('dist')))

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: path.resolve('dist') })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})