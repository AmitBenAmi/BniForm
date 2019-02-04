import GroupAcceptanceController from '../Controllers/GroupAcceptanceController'

class GroupAcceptanceRoute {
    static async init(app, db) {
        this.groupAcceptanceController = new GroupAcceptanceController(db)
        this.groupAcceptanceController.init()
        this.groupAcceptanceController.associate()
    }
}

export default GroupAcceptanceRoute