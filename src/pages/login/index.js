import React, { Component } from 'react';
import './index.css';
import { Card, Input, Button, message } from 'antd';
import { UserOutlined, AlignLeftOutlined } from '@ant-design/icons';

import '../../utils/circle';
export default class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
            userNum: '',
            passWd: ''
        }
    }
    componentDidMount() {
    }
    userNumChange(e) {
        this.setState({
            userNum: e.target.value
        })
    }

    passWdChange(e) {
        this.setState({
            passWd: e.target.value
        })
    }
    login() {
        const { passWd, userNum } = this.state;
        if(!(passWd && userNum)) {
            message.error('请输入账号或密码');
        } else {
            message.success('登陆成功');
            this.props.history.push({ pathname:'/videolist' });
        }
    }
    
    render () {
        return (
            <div className="login">
                <Card title="弹幕系统登录" className="login-card">
                    <div className="column-card">
                        <Input
                            placeholder="请输入账号"
                            prefix={<UserOutlined />}
                            className="input" 
                            onChange={this.userNumChange.bind(this)}
                            />
                        <Input.Password
                            placeholder="请输入密码"
                            prefix={<AlignLeftOutlined />}
                            className="input" 
                            onChange={this.passWdChange.bind(this)}
                            />
                        <Button
                            type="primary"
                            className="btn"
                            onClick={this.login.bind(this)}
                            >登录</Button>
                    </div>
                </Card>
            </div>
        )
    }
}