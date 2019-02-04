import Sequelize from 'sequelize'
import DefaultModel from './defaultModel'
import Member from './member'

const syncOptions = {
    alter: true,
    force: true
}

class GroupAcceptance extends DefaultModel {
    constructor(groupAcceptance) {
        super(groupAcceptance)
        this.joinRequestDate = groupAcceptance.joinRequestDate
        this.acceptanceDate = groupAcceptance.acceptanceDate
        this.formReturnToFriendCommitteeDueDate = groupAcceptance.formReturnToFriendCommitteeDueDate
        this.formReturningDate = groupAcceptance.formReturningDate
        this.mspGuidanceRegistrationDate = groupAcceptance.mspGuidanceRegistrationDate
        this.mspGuidanceExecutionDate = groupAcceptance.mspGuidanceExecutionDate
        this.personalTutoring = groupAcceptance.personalTutoring
        this.regulationsApprovalDate = groupAcceptance.regulationsApprovalDate
        this.regulationsApprovalSignature = groupAcceptance.regulationsApprovalSignature
        this.tutorTeamCeoApprovalDate = groupAcceptance.tutorTeamCeoApprovalDate
        this.tutorTeamCeoApprovalSignature = groupAcceptance.tutorTeamCeoApprovalSignature
    }

    static async init(sequelize) {
        let attributes = {
            joinRequestDate: Sequelize.DATEONLY,
            acceptanceDate: Sequelize.DATEONLY,
            formReturnToFriendCommitteeDueDate: Sequelize.DATEONLY,
            formReturningDate: Sequelize.DATEONLY,
            mspGuidanceRegistrationDate: Sequelize.DATEONLY,
            mspGuidanceExecutionDate: Sequelize.DATEONLY,
            regulationsApprovalDate: Sequelize.DATEONLY,
            regulationsApprovalSignature: Sequelize.STRING,
            tutorTeamCeoApprovalDate: Sequelize.DATEONLY,
            tutorTeamCeoApprovalSignature: Sequelize.STRING
        }
        let options = {
            sequelize
        }

        await super.init(attributes, options)
        await GroupAcceptance.sync()
    }
    
    static async sync() {
        await super.sync(syncOptions)
    }

    static async associate() {
        GroupAcceptance.belongsTo(Member, {
            as: 'tutor',
            onDelete: 'cascade'
        })

        await GroupAcceptance.sync()
    }
}

export default GroupAcceptance