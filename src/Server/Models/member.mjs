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

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

export default Member