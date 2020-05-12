import React, { Component } from 'react';
import './index.css';
import { Card, Input, Button, message } from 'antd';
import { UserOutlined, AlignLeftOutlined } from '@ant-design/icons';
import axios from 'axios';

import '../../utils/circle';
export default class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
            userNum: '',
            passWd: '',
            mode: 0 // 0为登录 1 为注册
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
        const { passWd, userNum, mode } = this.state;
        // 注册
        if(mode) {
            if(!(passWd && userNum)) {
                message.error('请输入账号或密码');
            } else {
                axios({
                    method: 'post',
                    url: 'http://127.0.0.1:8081/regist',
                    data: {
                        username: userNum,
                        password: passWd
                    },
                    withCredentials: true
                })
                .then(res => {
                    if(!Number(res.data.code)) {
                        message.success('注册成功');
                        this.setState({
                            mode: !this.state.mode
                        })
                    } else {
                        message.error(res.data.msg);
                    }
                })
                
            }
        } else { // 登录
            if(!(passWd && userNum)) {
                message.error('请输入账号或密码');
            } else {
                axios({
                    method: 'post',
                    url: 'http://127.0.0.1:8081/login',
                    data: {
                        username: userNum,
                        password: passWd
                    },
                    withCredentials: true
                })
                .then(res => {
                    if(!Number(res.data.code)) {
                        message.success('登陆成功');
                        this.props.history.push({ pathname:'/videolist' });
                    } else {
                        message.error(res.data.msg)
                    }
                })
                
            }
        }
       
    }
    changeMode(mode) {
        this.setState({
            mode: !this.state.mode
        })
    }
    
    render () {
        const { mode } = this.state
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
                        <div className="tips" onClick={this.changeMode.bind(this, mode)}>
                        {
                            mode ? '已有账号?立即登录' : '还没有账号?点击注册'
                        }
                        </div>
                        <Button
                            type="primary"
                            className="btn"
                            onClick={this.login.bind(this)}
                            >
                            {
                                mode ? '注册' : '登录'
                            }
                        </Button>
                    </div>
                </Card>
            </div>
        )
    }
}