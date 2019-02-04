import GroupAcceptanceController from '../Controllers/GroupAcceptanceController'

class GroupAcceptanceRoute {
    static async init(app, db) {
        this.groupAcceptanceController = new GroupAcceptanceController(db)
        await this.groupAcceptanceController.init()
    }
}

export default GroupAcceptanceRoute