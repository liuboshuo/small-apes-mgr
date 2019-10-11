import React from 'react'
import bg_store from "./../../assets/img/bg_store.png"
import icon_buy_task from "./../../assets/img/icon_buy_task.png"

export default class AddBlogPage extends React.Component {
    render(){
        return (
            <div>
                <p>AddBlogPage</p>
                <img src={bg_store} />
                <image src={icon_buy_task} />
            </div>
        )
    }
}

