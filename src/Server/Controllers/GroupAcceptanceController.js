import GroupAcceptance from '../DB/Models/groupAcceptance'
import PersonalTutoring from '../DB/Models/personalTutoring'
import GroupTutoring from '../DB/Models/groupTutoring'

class GroupAcceptanceController {
    constructor(db) {
        this.db = db
    }

    async init() {
        await GroupAcceptance.init(this.db)
        await PersonalTutoring.init(this.db)
        await GroupTutoring.init(this.db)
    }
}

export default GroupAcceptanceController