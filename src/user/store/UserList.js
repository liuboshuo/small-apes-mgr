import { observable,action } from "mobx"

class UserListStore {

    @observable name;

    constructor(){
        this.name = "my name is user list;";
    }


    @action
    setName(name){
        this.name = name;
    }

}

export default new UserListStore();