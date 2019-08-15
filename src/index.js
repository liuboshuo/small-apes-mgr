import React from 'react'
import ReactDom from 'react-dom'
import AppRouter from "./router"
import "./app.less"

class App extends React.Component {
    render(){
        return (
            <AppRouter />
        )
    }
}

ReactDom.render(<App/>,document.getElementById("app"))
