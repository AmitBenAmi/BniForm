import GroupAcceptance from '../DB/Models/groupAcceptance'
import PersonalTutoring from '../DB/Models/personalTutoring'
import GroupTutoring from '../DB/Models/groupTutoring'

class GroupAcceptanceController {
    constructor(db) {
        this.db = db
        this.models = [
            GroupAcceptance,
            GroupTutoring,
            PersonalTutoring
        ]
    }

    async init() {
        for (let i = 0; i < this.models.length; i++) {
            await model.init(this.db)
            await model.associate()
            await model.sync()
        }
    }
}

export default GroupAcceptanceController