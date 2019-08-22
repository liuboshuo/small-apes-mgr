const UserListRouter = require("./user")
const ResumeRouter = require("./resume")

module.exports = function initRoutes(app){
    app.use(UserListRouter.routes()).use(UserListRouter.allowedMethods())
    app.use(ResumeRouter.routes()).use(ResumeRouter.allowedMethods())
}