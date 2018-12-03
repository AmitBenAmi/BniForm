import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import DataBase from './DB/mySqlDatabase'
import MemberRoute from './Routes/memberRoute'

const app = express()
const port = process.env.PORT || 1234

app.use(bodyParser.json())
app.use(express.static(path.resolve('dist')))

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: path.resolve('dist') })
})

app.listen(port, () => {
    console.info(`Listening on port ${port}`)
});

(async () => {
    try {
        let db = new DataBase('bni', 'bni', 'Aa123456', 'localhost')
        await db.connect()
        MemberRoute.init(app, db)
    } catch (e) {
        console.error(e.message)
        console.error(e.stack)
    }
})()