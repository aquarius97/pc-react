import React, {Component} from 'react';
import './AppHeader.css'
import {Link,NavLink} from 'react-router-dom'

class AppHeader extends Component {
    render() {
        return (
            <div className="AppHeader">
                <div className="headerTopBottom">
                    <div className="headerTop">
                        <div className="headerLeft">
                            <span>服务热线：010-67445051</span>
                        </div>
                        <div className="headerRight">
                            <div><Link to="/login">登录</Link></div>
                            <i>|</i>
                            <div>注册</div>
                        </div>
                    </div>
                </div>
                <div className="headerBottom">
                    <NavLink className="navLogo" to="/">
                        <img src={require('../assets/home/logo.png')} alt=""/>
                    </NavLink>
                    <ul>
                        <li><NavLink exact to="/" activeClassName="showLi">首页</NavLink></li>
                        <li><NavLink to="/SportsEvent" activeClassName="showLi">项目</NavLink></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default AppHeader