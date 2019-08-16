import React from 'react'
import {withRouter} from 'react-router-dom'
import {Button} from "antd"
import { inject , observer} from "mobx-react"

@inject("UserListStore") // 注入mobx实例到props
@observer // UserListStore实例和组件双向绑定
class UserListPage extends React.Component {

    componentDidMount(){
        const {UserListStore} = this.props;
        UserListStore.getUserList();
    }
    render(){
        const {UserListStore} = this.props;
        return (
            <div>
                {
                    UserListStore.userList.map((item,index)=><p key={index}>{item.id}->{item.user_name}</p>)
                }
            </div>
        )
    }
}

export default withRouter(UserListPage);

