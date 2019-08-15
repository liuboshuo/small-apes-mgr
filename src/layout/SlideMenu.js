import React , {Component} from "react"
import { Link , withRouter } from "react-router-dom"
import { Menu, Icon } from 'antd';
import routes from './../router.config'
const { SubMenu } = Menu;

class SliderMenu extends Component {


    renderMenuItem = (item) => (
        <Menu.Item key={`${item.path}`}>
            <Link to={item.path}>
                {item.icon ? <Icon type={`${item.icon}`} /> : null}
                <span>{item.title}</span>
            </Link>
        </Menu.Item>
    )

    renderMenu = (menus) => menus.map((item)=> {
        if(item.childern && item.childern.length > 0){
            return (
                <SubMenu 
                        key={item.path} 
                        title={
                            <span>
                                <Icon type={`${item.icon}`} />
                                <span>{item.title}</span>
                            </span>
                        }
                >
                    {item.childern.map(data=>this.renderMenuItem(data))}
                </SubMenu>
            )
        }else{
            return this.renderMenuItem(item)
        }
    })

    render() {
        const { location } = this.props;
        const {pathname} = location;
        const paths = pathname.split("/").filter(item=>!!item);
        const openKey = `/${paths.length > 0 ? paths[0] : ''}`
        return (
            <div class="slide-menu">
                <Menu selectedKeys={[pathname]}
                        defaultOpenKeys={[openKey]}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={false}
                >   
                    { this.renderMenu(routes) }
                </Menu>
            </div>
        );
    }

} 

export default withRouter(SliderMenu);