import React from 'react'
import UserListPage from "./pages/list"
import AddUserPage from "./pages/add"

import { Route } from 'react-router-dom'

export default class UserIndex extends React.Component {
    render(){
        return (
            <div>
                <p>UserIndex</p>
                {/* 子路由 */}
                <Route path="/user/list" component={UserListPage} />
                <Route path="/user/add" component={AddUserPage} />
            </div>
        )
    }
}

