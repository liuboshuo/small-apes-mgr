import React from 'react'
import {withRouter} from 'react-router-dom'
import {Button,Table,Switch} from "antd"
import { inject , observer} from "mobx-react"

@inject("UserListStore") // 注入mobx实例到props
@observer // UserListStore实例和组件双向绑定
class UserListPage extends React.Component {

    componentDidMount(){
        const {UserListStore} = this.props;
        UserListStore.getUserList();
    }
    columns = (columns)=>{
        return columns.map((item)=>{
            item.align = "center";
            if(item.key == 'index'){
                item.render = (row,data,index)=>{
                    return <p>{index + 1}</p>
                }
            }else if(item.key == "status"){
                item.render = (row,data)=>{
                    return <Switch checked={row} onChange={()=>this.onSwitchChange(data)}/>
                }
            }else if(item.key == "avatar"){
                item.render = (row)=>{
                    return <img src={row} alt="" class="avatar"/>
                }
            }
            return item;
        })
    }
    onSwitchChange = (item)=>{
        const {UserListStore} = this.props;
        UserListStore.updateStatus(item.id,!item.status)
    }
    addUser = () => {
        this.props.history.push("/user/add")
    }
    render(){
        const {UserListStore} = this.props;
        return (
            <div class="user-list-page">
                <div class="buttons-box">
                    <Button type="primary" onClick={this.addUser}>添加用户</Button>
                </div>
                <Table bordered columns={this.columns(UserListStore.userListColumns)} dataSource={UserListStore.userList} rowKey={(record=>record.id)}/>
            </div>
        )
    }
}

export default UserListPage;

