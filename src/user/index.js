import React from 'react'
import "./index.less"
import { Route } from 'react-router-dom'
import LoadableComponent from "@/loadable"
const UserListPage = LoadableComponent(()=>import("./pages/list"))
const AddUserPage = LoadableComponent(()=>import("./pages/add"))

// import UserListPage from "./pages/list"
// import AddUserPage from "./pages/add"

export default class UserIndex extends React.Component {
    render(){
        return (
            <div class="user-container">
                {/* 子路由 */}
                <Route path="/user/list" component={UserListPage} />
                <Route path="/user/add" component={AddUserPage} />
            </div>
        )
    }
}

