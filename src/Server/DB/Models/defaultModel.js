import Sequelize from 'sequelize'

class DefaultModel extends Sequelize.Model {
    static async init(attributes, options) {
        await super.init(attributes, options)
    }

    static async sync(syncOptions) {
        await super.sync(syncOptions)
    }

    static async associate() {
    }
}

export default DefaultModel