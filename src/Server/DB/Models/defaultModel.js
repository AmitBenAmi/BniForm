import Sequelize from 'sequelize'

class DefaultModel extends Sequelize.Model {
    static async init(attributes, options) {
        await super.init(attributes, options)
    }
}

export default DefaultModel