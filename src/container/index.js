import React from 'react'
import SliderMenu from "@/layout/SlideMenu"
import NavigationBar from "@/layout/NavigationBar"
import { Route } from "react-router-dom"

import BlogIndex from "@/blog"
import ResumeIndex from "@/resume"
import UserIndex from "@/user"

export default class HomeIndex extends React.Component {
    render(){
        return (
            <div class="app-container">
                <NavigationBar />
                <div class="app-content">
                    <SliderMenu />
                    <div class="container">
                        <Route exact path="/resume" component={ResumeIndex}/>
                        {/* blog */}
                        <Route path="/blog" component={BlogIndex}/>
                        {/* user */}
                        <Route path="/user" component={UserIndex}/>
                    </div>
                </div>
            </div>
        )
    }
}

