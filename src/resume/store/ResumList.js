import { observable,action } from "mobx"
import * as API from "../api"

class ResumeListStore {

    @observable resumeList;

    resumeListColumns = [
      {
        title: '序号',
        dataIndex: 'index',
        key: 'index',
      },
      {
        title: '头像',
        dataIndex: 'avatar',
        key: 'avatar',
      },
      {
        title: '用户名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '简历名称',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: '简历是否公开',
        dataIndex: 'status',
        key: 'status',
        width: "6%",
      },
      {
        title: '手机号',
        dataIndex: 'mobile',
        key: 'mobile',
      },
      {
        title:"邮箱",
        dataIndex: "email",
        key:'email'
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
        title: '操作',
        dataIndex: 'actions',
        key: 'actions',
      },
    ];

    constructor(){
        this.resumeList = [];
    }

    @action
    async getResumeList(){
        const result = await API.getResumeList();
        if(result && result.code === 0){
            const resumeList = result.data;
            this.resumeList = resumeList;
        }
    }


     
    async deleteResume(id){
      const result = await API.deleteResume(id);
        if(result && result.code === 0){
            return true;
        }
        return false
    }

    @action
    deleteResumeWithId(id){
      const index = this.resumeList.findIndex(item=>{
          return item.id === id
      })
      this.resumeList.splice(index,1)
      this.resumeList = [].concat(this.resumeList)
    }

    @action
    async updateStatus(id,status){
      const result = await API.updateStatus({id,status});
        if(result && result.code === 0){
          const item = this.resumeList.find(item=>{
            return item.id === id
        });
          item.status = status;
          this.resumeList = [].concat(this.resumeList)
        }
    }

}

export default new ResumeListStore();