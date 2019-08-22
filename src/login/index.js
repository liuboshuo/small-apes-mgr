import React from 'react'
import { inject , observer} from "mobx-react"

@inject("ResumeListStore")
@observer
export default class LoginPage extends React.Component {
    render(){
        return (
            <div>
                <p>LoginPage</p>
            </div>
        )
    }
}

