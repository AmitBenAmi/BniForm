import Sequelize from 'sequelize'
import DefaultModel from './defaultModel'

class GroupAcceptance extends DefaultModel {
    static async init(sequelize) {
        let attributes = {
            joinRequestDate:  Sequelize.DATEONLY,
            acceptanceDate: Sequelize.DATEONLY,
            formReturnToFriendCommitteeDueDate: Sequelize.DATEONLY,
            formReturningDate: Sequelize.DATEONLY,
            mspGuidanceRegistrationDate: Sequelize.DATEONLY,
            mspGuidanceExecutionDate
        }
        let options = {
            sequelize
        }
        await super.init(attributes, options)
    }

    constructor(groupAcceptance) {
        super(groupAcceptance)
        this.joinRequestDate = groupAcceptance.joinRequestDate
        this.acceptanceDate = groupAcceptance.acceptanceDate
        this.formReturnToFriendCommitteeDueDate = groupAcceptance.formReturnToFriendCommitteeDueDate
        this.formReturningDate = groupAcceptance.formReturningDate
        this.mspGuidanceRegistrationDate = groupAcceptance.mspGuidanceRegistrationDate
        this.mspGuidanceExecutionDate = groupAcceptance.mspGuidanceExecutionDate
    }
}