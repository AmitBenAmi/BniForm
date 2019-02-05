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

    init() {
        this.models.forEach(async (model) => {
            await model.init(this.db)
            await model.associate()
            await model.sync()
        })
    }
}

export default GroupAcceptanceController