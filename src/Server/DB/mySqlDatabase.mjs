import DataBase from './database'
const MYSQL_DIALECT = 'mysql'

class MySqlDatabase extends DataBase {
    constructor(database, username, password, host) {
        super(database, username, password, host, MYSQL_DIALECT)
    }
}

export default MySqlDatabase