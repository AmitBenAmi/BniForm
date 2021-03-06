import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import DataBase from './DB/Infrastructure/mySqlDatabase'
import MemberRoute from './Routes/memberRoute'
import GroupAcceptanceRoute from './Routes/groupAcceptanceRoute'

const app = express()
const port = process.env.PORT || 1234

app.use(bodyParser.json())
app.use(express.static(path.resolve('dist/Client')))
app.use(cors())

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: path.resolve('dist/Client') })
})

let initialize = async () => {
    let db = new DataBase('bni', 'bni', 'Aa123456', '127.0.0.1')
    await db.connect()
    await MemberRoute.init(app, db)
    await GroupAcceptanceRoute.init(app, db)
}

let startServer = () => {
    app.listen(port, () => {
        console.info(`Server is listening on 'http://localhost:${port}/'`)
    })
};

(async () => {
    try {
        await initialize()
        startServer()
    } catch (e) {
        console.error(e.message)
        console.error(e.stack)
    }
})()