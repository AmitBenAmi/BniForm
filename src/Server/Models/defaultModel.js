import Sequelize from 'sequelize'

class DefaultModel extends Sequelize.Model {
    static async init(attributes, options, forceSync) {
        await super.init(attributes, options)
        await super.sync({force: forceSync})
    }
}

export default DefaultModel