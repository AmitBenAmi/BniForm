import Sequelize from 'sequelize'
import DefaultModel from './defaultModel'

class Member extends DefaultModel {
    static async init(sequelize) {
        let attributes = {
            firstName: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    is: /^[a-zא-ת-]+$/i,
                    notNull: true,
                    notEmpty: true,
                    len: [2,15]
                }
            },
            lastName: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    is: /^[a-zא-ת-]+$/i,
                    notNull: true,
                    notEmpty: true,
                    len: [2,25]
                }
            }
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