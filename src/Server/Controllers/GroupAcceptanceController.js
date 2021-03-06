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
            await this.models[i].init(this.db)
        }
    }

    async getGroupAcceptance(req, res) {
        let groupAcceptance = await GroupAcceptance.findById(req.params.acceptanceId, {
            include: [{
                model: PersonalTutoring
            }, {
                model: GroupTutoring
            }]
        })
        res.json(groupAcceptance)
    }
}

export default GroupAcceptanceController