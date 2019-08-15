import React from 'react'
import {withRouter} from 'react-router-dom'
import {Button} from "antd"

class UserListPage extends React.Component {

    push = ()=>{
        this.props.history.push("/user/add?name=231");
    }
    render(){
        return (
            <div>
                <p>UserListPage</p>
                <Button onClick={this.push}>添加用户</Button>
            </div>
        )
    }
}

export default withRouter(UserListPage);

