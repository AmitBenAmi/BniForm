import Sequelize from 'sequelize'
import DefaultModel from './defaultModel'
import GroupAcceptance from './groupAcceptance'

class GroupTutoring extends DefaultModel {
    static async init(sequelize) {
        let attributes = {
            givingAndReceivingReferencesSecretsDate: Sequelize.DATEONLY,
            givingAndReceivingReferencesSecretsSignature: Sequelize.STRING,
            guestsInvitingSkillsDate: Sequelize.DATEONLY,
            guestsInvitingSkillsSignature: Sequelize.STRING,
            effectiveOneonOneMeetingsDate: Sequelize.DATEONLY,
            effectiveOneonOneMeetingsSignature: Sequelize.STRING,
            personalMainPresentationDate: Sequelize.DATEONLY,
            personalMainPresentationSignature: Sequelize.STRING
        }
        let options = {
            sequelize
        }
        await super.init(attributes, options)
        await super.sync({alter: true})
        GroupTutoring.setGroupAcceptanceAssociations()
    }

    constructor(groupTutoring) {
        super(groupTutoring)
        this.givingAndReceivingReferencesSecretsDate = groupTutoring.givingAndReceivingReferencesSecretsDate
        this.givingAndReceivingReferencesSecretsSignatu = groupTutoring.givingAndReceivingReferencesSecretsSignature
        this.guestsInvitingSkillsDate = groupTutoring.guestsInvitingSkillsDate 
        this.guestsInvitingSkillsSignatu = groupTutoring.guestsInvitingSkillsSignature
        this.effectiveOneonOneMeetingsDate = groupTutoring.effectiveOneonOneMeetingsDate 
        this.effectiveOneonOneMeetingsSignatu = groupTutoring.effectiveOneonOneMeetingsSignature
        this.personalMainPresentationDate = groupTutoring.personalMainPresentationDate
        this.personalMainPresentationSignat = groupTutoring.personalMainPresentationSignatur
        this.acceptance = groupTutoring.acceptance
    }

    static setGroupAcceptanceAssociations() {
        GroupTutoring.belongsTo(GroupAcceptance, {
            as: 'acceptance'
        })
        GroupAcceptance.hasOne(GroupTutoring, {
            as: 'groupTutoring',
            onDelete: 'cascade'
        })
    }
}

export default GroupTutoring