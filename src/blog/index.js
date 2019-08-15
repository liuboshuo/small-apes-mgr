import React from 'react'
import BlogListPage from "./pages/list"
import AddBlogPage from "./pages/add"

import { Route } from 'react-router-dom'

export default class BlogIndex extends React.Component {
    render(){
        return (
            <div>
                <p>BlogIndex</p>
                <Route path="/blog/list" component={BlogListPage} />
                <Route path="/blog/add" component={AddBlogPage} />
            </div>
        )
    }
}

