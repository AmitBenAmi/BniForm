import Sequelize from 'sequelize'
import DefaultModel from './defaultModel'

class Member extends DefaultModel {
    static async init(sequelize) {
        let attributes = {
            firstName: Sequelize.STRING,
            lastName: Sequelize.STRING
        }
        let options = {
            sequelize
        }
        await super.init(attributes, options)
    }

    constructor(member) {
        super(member)
        this.firstName = member.firstName
        this.lastName = member.lastName
    }
}

export default Member