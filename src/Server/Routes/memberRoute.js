import MemberController from '../Controllers/memberController'

class MemberRoute {
    static init(app, db) {
        this.memberController = new MemberController(db)
        
        app.route('/member')
            .get(this.memberController.getAllMembers)
            .post(this.memberController.addMember)

        app.route('/member/:memberId')
            .get(this.memberController.getMember)
    }
}

export default MemberRoute