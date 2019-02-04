import GroupAcceptance from '../DB/Models/groupAcceptance'
import PersonalTutoring from '../DB/Models/personalTutoring'
import GroupTutoring from '../DB/Models/groupTutoring'

class GroupAcceptanceController {
    constructor(db) {
        this.db = db
        this.models = [
            GroupTutoring,
            PersonalTutoring,
            GroupAcceptance
        ]
    }

    init() {
        this.models.forEach(async (model) => {
            await model.init(this.db)
        })
    }

    associate() {
        this.models.forEach(async (model) => {
            await model.associate()
        })
    }
}

export default GroupAcceptanceController