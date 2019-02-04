import Sequelize from 'sequelize'
import DefaultModel from './defaultModel'
import GroupAcceptance from './groupAcceptance'

class PersonalTutoring extends DefaultModel {
    static async init(sequelize) {
        let attributues = {
            meetingWithTutorialCeo: Sequelize.DATEONLY,
            firstMeetingWithMasterTutor: Sequelize.DATEONLY,
            secondMeetingWithMasterTutor: Sequelize.DATEONLY,
            thirdMeetingWithMasterTutor: Sequelize.DATEONLY,
            oneOnOneSharedMeetingDateWithTutor: Sequelize.DATEONLY,
            oneOnOneSharedMeetingWithWhoWithTutor: Sequelize.DATEONLY,
            businessVisualityTutorial: Sequelize.DATEONLY,
            mamtakTutorial: Sequelize.DATEONLY,
            mamtakFinalizedAt: Sequelize.DATEONLY,
            mamtakTutorSignature: Sequelize.STRING
        }
        let options = {
            sequelize
        }
        await super.init(sequelize, options)
        PersonalTutoring.setGroupAcceptanceAssociations()
    }

    constructor(personalTutoring) {
        super(personalTutoring)
        this.meetingWithTutorialCeo = personalTutoring.meetingWithTutorialCeo
        this.firstMeetingWithMasterTutor = personalTutoring.firstMeetingWithMasterTutor
        this.secondMeetingWithMasterTutor = personalTutoring.secondMeetingWithMasterTutor
        this.thirdMeetingWithMasterTutor = personalTutoring.thirdMeetingWithMasterTutor
        this.oneOnOneSharedMeetingDateWithTutor = personalTutoring.oneOnOneSharedMeetingDateWithTutor
        this.oneOnOneSharedMeetingWithWhoWithTutor = personalTutoring.oneOnOneSharedMeetingWithWhoWithTutor
        this.businessVisualityTutorial = personalTutoring.businessVisualityTutorial
        this.mamtakTutorial = personalTutoring.mamtakTutorial
        this.mamtakFinalizedAt = personalTutoring.mamtakFinalizedAt
        this.mamtakTutorSignature = personalTutoring.mamtakTutorSignature
        this.acceptance = personalTutoring.acceptance
    }

    static setGroupAcceptanceAssociations() {
        PersonalTutoring.belongsTo(GroupAcceptance, {
            as: 'acceptance'
        })
        GroupAcceptance.hasOne(PersonalTutoring, {
            as: 'personalTutoring',
            onDelete: 'cascade'
        })
    }
}

export default PersonalTutoring