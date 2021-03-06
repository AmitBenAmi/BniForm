import Sequelize from 'sequelize'
import DefaultModel from './defaultModel'
import GroupAcceptance from './groupAcceptance'

const syncOptions = {
    alter: true,
    force: true
}

class GroupTutoring extends DefaultModel {
    // constructor(groupTutoring) {
    //     super(groupTutoring)
    //     this.givingAndReceivingReferencesSecretsDate = groupTutoring.givingAndReceivingReferencesSecretsDate
    //     this.givingAndReceivingReferencesSecretsSignatu = groupTutoring.givingAndReceivingReferencesSecretsSignature
    //     this.guestsInvitingSkillsDate = groupTutoring.guestsInvitingSkillsDate 
    //     this.guestsInvitingSkillsSignatu = groupTutoring.guestsInvitingSkillsSignature
    //     this.effectiveOneonOneMeetingsDate = groupTutoring.effectiveOneonOneMeetingsDate 
    //     this.effectiveOneonOneMeetingsSignatu = groupTutoring.effectiveOneonOneMeetingsSignature
    //     this.personalMainPresentationDate = groupTutoring.personalMainPresentationDate
    //     this.personalMainPresentationSignat = groupTutoring.personalMainPresentationSignatur
    // }
    
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
        await GroupTutoring.associate()
        await GroupTutoring.sync()
    }

    static async sync() {
        await super.sync(syncOptions)
    }

    static async associate() {
        GroupTutoring.belongsTo(GroupAcceptance, {
            onDelete: 'cascade'
        })

        GroupAcceptance.hasOne(GroupTutoring)
    }
}

export default GroupTutoring