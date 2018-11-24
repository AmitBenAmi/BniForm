import Member from '../Models/member'

class MemberController {
    async getAllMembers() {
        return await Member.findAll()
    }

    async getMember(id) {
        return await Member.findByPk(id)
    }
}