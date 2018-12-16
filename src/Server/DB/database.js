import Sequelize from 'sequelize'

class DataBase extends Sequelize {
    constructor(database, username, password, host, dialect) {
        super(database, username, password, {
            host: host,
            dialect: dialect,
            timezone: '+02:00',
            sync: {
                force: false
            }
        })
    }

    async connect() {
        try {
            await super.authenticate()
            console.info('The connection to the database is established')
        }
        catch (ex) {
            console.error('Unable to connect to the database. Reason:', ex.message)
        }
    }
}

export default DataBase