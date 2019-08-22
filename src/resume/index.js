import React from 'react'
import "./index.less"
import {Button,Table,Switch} from "antd"
import { inject , observer} from "mobx-react"

@inject("ResumeListStore")
@observer
export default class ResumeIndex extends React.Component {
    componentDidMount(){
        const { ResumeListStore } = this.props;
        ResumeListStore.getResumeList();
    }

    deleteResume = async (item) => {
        const { ResumeListStore } = this.props;
        const result = await ResumeListStore.deleteResume(item.id);
        if(result){
            //删除成功
            ResumeListStore.deleteResumeWithId(item.id)
        }
    }

    columns = (columns)=>{
        return columns.map((item)=>{
            item.align = "center";
            if(item.key == 'index'){
                item.render = (row,data,index)=>{
                    return <p>{index+1}</p>
                }
            }else if(item.key == "status"){
                item.render = (row,data)=>{
                    return <Switch checked={row} onChange={()=>this.onSwitchChange(data)}/>
                }
            }else if(item.key == "avatar"){
                item.render = (row)=>{
                    return <img src={row} alt="" class="avatar"/>
                }
            }else if(item.key == "actions"){
                item.render = (row,data) => <div>
                    <Button type="danger" onClick={()=>this.deleteResume(data)}>删除</Button>
                </div>
            }
            return item;
        })
    }
    onSwitchChange = (item)=>{
        const {ResumeListStore} = this.props;
        ResumeListStore.updateStatus(item.id,!item.status)
    }
    render(){
        const {ResumeListStore} = this.props;
        return (
            <div class="resume-list-page">
                <Table bordered columns={this.columns(ResumeListStore.resumeListColumns)} dataSource={ResumeListStore.resumeList} rowKey={(record=>record.id)}/>
            </div>
        )
    }
}

