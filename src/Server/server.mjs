import path from 'path'
import express from 'express'
import DataBase  from './DB/mySqlDatabase'
import Member from './DB/Models/member'

const app = express()

const port = process.env.PORT || 1234

app.use(express.static(path.resolve('dist')))

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: path.resolve('dist') })
})

app.listen(port, async () => {
    console.info(`Listening on port ${port}`)
    let db = new DataBase('bni', 'bni', 'Aa123456', 'localhost')
    await db.connect()

    console.info('Creating the first user')
    Member.init(db)
    await Member.sync({force: true})
    await Member.create({
        firstName: 'Amit',
        lastName: 'Ben Ami'
    })

    let members = await Member.findAll()
    console.info(members)
})