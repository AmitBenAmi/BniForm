import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import DataBase from './DB/Infrastructure/mySqlDatabase'
import MemberRoute from './Routes/memberRoute'

const app = express()
const port = process.env.PORT || 1234

app.use(bodyParser.json())
app.use(express.static(path.resolve('dist/Client')))
app.use(cors())

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: path.resolve('dist/Client') })
})

let startServer = () => {
    app.listen(port, () => {
        console.info(`Listening on port ${port}`)
    })
};

(async () => {
    try {
        let db = new DataBase('bni', 'bni', 'Aa123456', '127.0.0.1')
        await db.connect()
        await MemberRoute.init(app, db)

        startServer()
    } catch (e) {
        console.error(e.message)
        console.error(e.stack)
    }
})()