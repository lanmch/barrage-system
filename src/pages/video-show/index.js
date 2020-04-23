import React, { Component } from 'react';
import './index.css';
import Barrage from 'page-construct-template_component_barrage';
import { Input, Button, message } from 'antd';

export default class VideoShow extends Component {
    constructor (props) {
        super(props);
        this.state = {
            barrageInput: '',
            defaultData: [
                {
                    text: '开始咯～',
                    color: 'orange',
                    fontSize: 40
                },
                {
                    text: '嘻嘻',
                    color: 'red'
                }
            ]
        }
    }
    componentDidMount () {
        console.log(this.props.location.state.videoIndex);

        let i = 0;
        setInterval(() => {
            this.setState({
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
            });
            i++;
        }, 3000);
        
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

            // 执行当前发送弹幕展示
            this.setState({
                defaultData: [
                    {
                        text: barrageInput,
                        color: 'pink',
                        fontSize: 50
                    }
                ],
                barrageInput: ''
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
                        speed={[1, 2]}
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