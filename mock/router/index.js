const UserListRouter = require("./user")

module.exports = function initRoutes(app){
    app.use(UserListRouter.routes()).use(UserListRouter.allowedMethods())
}