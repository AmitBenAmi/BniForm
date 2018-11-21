import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('MySQL80', 'bni', 'Aa123456', {
    host: 'localhost',
    dialiect: 'mysql'
})

module.exports = sequelize