import MemberController from '../Controllers/memberController'

class MemberRoute {
    static async init(app, db) {
        this.memberController = new MemberController(db)
        await this.memberController.init()
        
        app.route('/member')
            .get(this.memberController.getAllMembers)
            .post(this.memberController.addMember)

        app.route('/member/:memberId')
            .get(this.memberController.getMember)
    }
}

export default MemberRoute