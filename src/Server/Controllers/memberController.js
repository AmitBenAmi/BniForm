import Member from '../Models/member'

class MemberController {
    constructor(db) {
        this.db = db
    }

    async init() {
        await Member.init(this.db)
    }

    async getAllMembers(req, res) {
        let members = await Member.findAll()
        res.json(members)
    }

    async getMember(req, res) {
        let member = await Member.findByPk(req.params.memberId)
        res.json(member)
    }

    async addMember(req, res) {
        let member = new Member(req.body)
        await Member.create(member)
        res.json({message: 'OK'})
    }
}

export default MemberController