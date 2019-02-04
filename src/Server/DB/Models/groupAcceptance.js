import Sequelize from 'sequelize'
import DefaultModel from './defaultModel'
import Member from './member'
import PersonalTutoring from './personalTutoring'
import GroupTutoring from './groupTutoring'

class GroupAcceptance extends DefaultModel {
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
        GroupAcceptance.setMemberAssocations()
    }
    
    constructor(groupAcceptance) {
        super(groupAcceptance)
        this.joinRequestDate = groupAcceptance.joinRequestDate
        this.acceptanceDate = groupAcceptance.acceptanceDate
        this.formReturnToFriendCommitteeDueDate = groupAcceptance.formReturnToFriendCommitteeDueDate
        this.formReturningDate = groupAcceptance.formReturningDate
        this.mspGuidanceRegistrationDate = groupAcceptance.mspGuidanceRegistrationDate
        this.mspGuidanceExecutionDate = groupAcceptance.mspGuidanceExecutionDate
        this.tutor = groupAcceptance.tutor
        this.personalTutoring = groupAcceptance.personalTutoring
        this.regulationsApprovalDate = groupAcceptance.regulationsApprovalDate
        this.regulationsApprovalSignature = groupAcceptance.regulationsApprovalSignature
        this.tutorTeamCeoApprovalDate = groupAcceptance.tutorTeamCeoApprovalDate
        this.tutorTeamCeoApprovalSignature = groupAcceptance.tutorTeamCeoApprovalSignature
    }

    static setMemberAssocations() {
        GroupAcceptance.belongsTo(Member, {
            as: 'tutor'
        })
        Member.hasOne(GroupAcceptance, {
            as: 'acceptance'
        })
    }
}

export default GroupAcceptance