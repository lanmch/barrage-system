import React, { Component } from 'react';
import './index.css';
import Barrage from 'page-construct-template_component_barrage';
import { Input, Button, message } from 'antd';
import axios from 'axios';

export default class VideoShow extends Component {
    constructor (props) {
        super(props);
        this.state = {
            barrageInput: '',
            speed: [1, 2],
            defaultData: [
                // {
                //     text: '开始咯～',
                //     color: 'orange',
                //     fontSize: 40
                // },
                // {
                //     text: '嘻嘻',
                //     color: 'red'
                // }
            ]
        }
    }
    changeBarrage() {
        console.log('123')
        
    }
    componentDidMount () {
        let video = document.getElementById('video');
        let i = 0;
        let that = this;
        let timeInterval;
        //监听播放开始
        video.addEventListener('play',function(){
            console.log("开始播放");
            timeInterval = setInterval(() => {
                that.setState({
                    defaultData: [
                        {
                            text: `hello${i}`,
                            color: 'orange',
                            fontSize: 30
                        },
                        {
                            text: `text${i}`,
                            color: 'red'
                        },
                        {
                            text: `张大业${i}`,
                            color: 'green'
                        }
                    ]
                })
                i++;
            }, 3000);
        });

        //监听播放暂停
        video.addEventListener('pause',function(){
            console.log("播放暂停");
            clearInterval(timeInterval)
        }); 

        //监听播放结束
        video.addEventListener('ended',function(){
            console.log("播放结束");
        });

        
        
        this.setBarrageHeight();
    }
    setBarrageHeight () {
        let top = document.getElementById("video").offsetTop;
        let width = document.getElementById("video").offsetWidth;
        document.getElementsByClassName("barrage")[0].style.top = top + 'px';
        document.getElementsByClassName("barrage")[0].style.width = width + 'px';
    }
    sendBarrage() {
        const { barrageInput } = this.state;
        if(!barrageInput) {
            message.error('您所要发送的弹幕为空，请输入后再发送');
        } else {
            //  请求
            
            axios({
                method: 'get',
                url: 'http://127.0.0.1/writedanmu',
                data: {
                    userid: 0,
                    roomid: 1,
                    time: 123,
                    content: barrageInput,
                    speed: 2000,
                    color: 'red'
                }
            })
            .then(res => {
                // 执行当前发送弹幕展示
                this.setState({
                    defaultData: [
                        {
                            text: barrageInput,
                            color: 'red',
                            fontSize: 50
                        }
                    ],
                    barrageInput: ''
                })
            })
            
        }
    }
    inputChange(e) {
        this.setState({
            barrageInput: e.target.value
        })
    }
    render () {
        return (
            <div className="video-show">
                <div className="video-zone">
                    <Barrage
                        className="barrage"
                        id="barrage"
                        way="css3"
                        data={this.state.defaultData}
                        fontSize={25}
                        lineHeight={40}
                        speed={this.state.speed}
                        barrageAway={100}
                        onMouseOver={({ event, stopAnimation }) => stopAnimation()}
                        onMouseOut={({ event, reStartAnimation }) => reStartAnimation()}
                    >

                    </Barrage>
                    <video
                        className="video"
                        controls="controls"
                        id="video"
                    >
                        
                        <source
                            type="video/mp4"
                            src={ require("./video/video2.mp4") }
                        >
                        </source>
                        
                    </video>
                    <div className="input-area">
                        <Input onChange={this.inputChange.bind(this)} value={this.state.barrageInput} placeholder="发送弹幕，一起互动吧~" />
                        <Button onClick={this.sendBarrage.bind(this)} className="btn" type="primary">发送</Button>
                    </div>
                </div>
            </div>
        )
    }
}