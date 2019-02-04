import Sequelize from 'sequelize'
import DefaultModel from './defaultModel'

class Member extends DefaultModel {
    static async init(sequelize) {
        let attributes = {
            firstName: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    is: /^[a-zא-ת-]+$/i, // Just letters and hyphen
                    notNull: true,
                    notEmpty: true,
                    len: [2,15]
                }
            },
            lastName: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    is: /^[a-zא-ת-]+$/i, // Just letters and hyphen
                    notNull: true,
                    notEmpty: true,
                    len: [2,25]
                }
            },
            phone: {
                type: Sequelize.STRING(10),
                allowNull: false,
                validate: {
                    isNumeric: true,
                    notNull: true,
                    notEmpty: true,
                    len: [7,10]
                }
            },
            isTutor: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
                validate: {
                    notNull: true
                }
            }
        }
        let options = {
            sequelize
        }
        await super.init(attributes, options)
        await super.sync({alter: true})
    }

    constructor(member) {
        super(member)
        this.firstName = member.firstName
        this.lastName = member.lastName
        this.phone = member.phone
        this.isTutor = member.isTutor
    }
}

export default Member