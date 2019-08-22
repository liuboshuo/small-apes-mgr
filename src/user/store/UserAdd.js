import { observable,action } from "mobx"
import * as API from "./../api"

class UserListStore {

    constructor(){
   
    }

    @action
    async addUser(data){
        const result = await API.addUser(data);
        return result;
    }
}

export default new UserListStore();