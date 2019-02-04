import Sequelize from 'sequelize'

class DefaultModel extends Sequelize.Model {
    static async init(attributes, options, syncOptions) {
        this.syncOptions = syncOptions
        await super.init(attributes, options)
    }

    static async associate() {
    }
}

export default DefaultModel