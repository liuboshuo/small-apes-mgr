import { observable,action } from "mobx"
import * as API from "./../api"

class UserListStore {

    @observable userList;

    userListColumns = [
      {
        title: '序号',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '用户名',
        dataIndex: 'user_name',
        key: 'user_name',
      },
      {
        title: '头像',
        dataIndex: 'avatar',
        key: 'avatar',
      },
      {
        title: '地址',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: '创建时间',
        dataIndex: 'create_time',
        key: 'create_time',
      },
      {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        width: "6%",
      },
    ];

    constructor(){
        this.userList = [];
    }

    @action
    async getUserList(){
        const result = await API.getUserList();
        if(result && result.code === 0){
            const userList = result.data;
            this.userList = userList;
        }
    }
}

export default new UserListStore();