import React from 'react'
import { Route } from 'react-router-dom'
import LoadableComponent from "@/loadable"
const BlogListPage = LoadableComponent(()=>import("./pages/list"))
const AddBlogPage = LoadableComponent(()=>import("./pages/add"))

// import BlogListPage from "./pages/list"
// import AddBlogPage from "./pages/add"

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

