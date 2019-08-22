import React from "react"
import { Route,BrowserRouter,Link,Switch,Redirect } from "react-router-dom"

import HomeIndex from "./container"
import NotFoundPage from "./container/404"
import LoginPage from "./login"


class AppRouter extends React.Component {
    render(){
        return (
            <BrowserRouter>
                {/* Switch只显示一个组件。加exact表示精确匹配/。如果不加exact，/xxx也会匹配/。  */}
                <Switch>
                    {/* 登陆 */}
                    <Route path="/login" component={LoginPage} />
                    {/* 404 */}
                    <Route exact path="/404" component={NotFoundPage} />
                    {/* 路由 */}
                    <Route path="/" component={HomeIndex} />
                    
                </Switch>
            </BrowserRouter>
        )
    }
}

export default AppRouter;