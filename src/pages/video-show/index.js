import React, { Component } from 'react';
import './index.css';
import Barrage from 'page-construct-template_component_barrage';
import { Input, Button, message, Select } from 'antd';
import axios from 'axios';

const { Option } = Select;
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
            ],
            chinaMovie: [
                {
                    img: 'https://pic.dlili.tv/upload/poster/bfb1e50ec8d26bc0.jpg',
                    title: '嘻哈翻转人生',
                    time: '2011-10-11'
                },{
                    img: 'https://pic.dlili.tv/upload/poster/8523d6352fede6df.jpg',
                    title: '冒险王',
                    time: '2011-10-11'
                },{
                    img: 'https://pic.dlili.tv/upload/poster/868e082eb7d41e28.jpg',
                    title: '冒险王尊尼',
                    time: '2011-10-11'
                },{
                    img: 'https://pic.dlili.tv/upload/poster/4150c477bd45f1e1.jpg',
                    title: '美国劫案',
                    time: '2011-10-11'
                },{
                    img: 'https://pic.dlili.tv/upload/poster/ee923bbbcf664a63.jpg',
                    title: '嘻哈翻转人生',
                    time: '2011-10-11'
                },{
                    img: 'https://pic.dlili.tv/upload/poster/651ab48c08e17a01.jpg',
                    title: '龙门飞甲',
                    time: '2020-05-11'
                }
            ]
        }
    }
    handleChange(value) {
        console.log(`selected ${value}`);
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
                url: 'http://127.0.0.1:8081/writedanmu',
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
                        <Select defaultValue="14px" style={{ width: 120 }} onChange={this.handleChange}>
                            <Option value="jack">14px</Option>
                            <Option value="lucy">16px</Option>
                            <Option value="jack">18px</Option>
                            <Option value="lucy">20px</Option>
                            <Option value="jack">22px</Option>
                            <Option value="lucy">24px</Option>
                        </Select>
                        <Select defaultValue="红色" style={{ width: 120 }} onChange={this.handleChange}>
                            <Option value="red">红色</Option>
                            <Option value="green">绿色</Option>
                            <Option value="blue">蓝色</Option>
                            <Option value="yellow">黄色</Option>
                            <Option value="pink">粉色</Option>
                        </Select>
                        <Input onChange={this.inputChange.bind(this)} value={this.state.barrageInput} placeholder="发送弹幕，一起互动吧~" />
                        <Button onClick={this.sendBarrage.bind(this)} className="btn" type="primary">发送</Button>
                    </div>
                </div>
                <div className="other-zone">
                    <div className="other-zone-item">
                        <div className="other-zone-item-title">热门标签</div>
                        <div className="text-zone">
                        {
                            ['犯罪','言情','BBC','专辑','剧情','冒险','动作','动画','悬疑','动物','动画','古装','歌舞','武侠','运动','连载','爱情','犯罪']
                            .map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={index % 3 == 0 ? 'text3' : index % 2 == 0 ? 'text2' : 'text1'}>
                                        { item }</div>
                                )
                            })
                        }
                        </div>
                    </div>
                    <div className="other-zone-item">
                        <div className="other-zone-item-title">热播资源</div>
                        <div className="movie-zone">
                        {
                            this.state.chinaMovie.map((item, index) => {
                                return (
                                    <div key={index} className="hot">
                                        <img src={item.img} />
                                        <div>{ item.title }</div>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}