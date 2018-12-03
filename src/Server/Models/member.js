import Sequelize from 'sequelize'

class Member extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            firstName: Sequelize.STRING,
            lastName: Sequelize.STRING
        }, {
            sequelize
        })
    }

    constructor(member) {
        super()
        this.firstName = member.firstName
        this.lastName = member.lastName
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

export default Member