import Sequelize from 'sequelize'
import DefaultModel from './defaultModel'
import GroupAcceptance from '../../../../dist/Server/DB/Models/groupAcceptance';

const syncOptions = {
    alter: true
}

class Member extends DefaultModel {
    // constructor(member) {
    //     super(member)
    //     this.firstName = member.firstName
    //     this.lastName = member.lastName
    //     this.phone = member.phone
    //     this.isTutor = member.isTutor

    //     this[GroupAcceptance.name] = member[GroupAcceptance.name]
    // }

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
        let syncOptions = {
            alter: true
        }

        await super.init(attributes, options, syncOptions)
        await Member.sync()
    }

    static async sync() {
        await super.sync(syncOptions)
    }
}

export default Member