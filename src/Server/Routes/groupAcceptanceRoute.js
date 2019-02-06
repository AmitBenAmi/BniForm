import GroupAcceptanceController from '../Controllers/GroupAcceptanceController'

class GroupAcceptanceRoute {
    static async init(app, db) {
        this.groupAcceptanceController = new GroupAcceptanceController(db)
        this.groupAcceptanceController.init()

        app.route('/acceptance/:acceptanceId')
            .get(this.groupAcceptanceController.getGroupAcceptance)
    }
}

export default GroupAcceptanceRoute