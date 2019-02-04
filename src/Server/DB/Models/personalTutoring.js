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
        let syncOptions = {
            alter: true,
            force: true
        }

        await super.init(attributues, options, syncOptions)
        await super.sync(this.syncOptions)
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
    }

    static async associate() {
        PersonalTutoring.belongsTo(GroupAcceptance, {
            onDelete: 'cascade'            
        })

        await super.sync(this.syncOptions)
    }
}

export default PersonalTutoring