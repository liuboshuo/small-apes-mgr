import { observable,action } from "mobx"
import axios from "axios"

class UserListStore {

    @observable userList;

    constructor(){
        this.userList = [];
    }

    @action
    async getUserList(){
        const config = {method:"get",url:"/api/user/list"};
        const result = await axios(config);
        if(result.data.code === 0){
            const userList = result.data.data;
            this.userList = userList;
        }
    }
}

export default new UserListStore();