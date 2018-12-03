import Member from '../Models/member'

class MemberController {
    constructor(db) {
        this.init(db)
    }

    async init(db) {
        Member.init(db)
        await Member.sync({force: false})
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