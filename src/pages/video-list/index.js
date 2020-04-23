import React, { Component } from 'react';
import './index.css';

import { Card } from 'antd';

export default class VideoList extends Component {
    constructor (props) {
        super(props);
        this.state = {

        }
    }
    goVideo(index) {
        this.props.history.push({ pathname:'/videoshow', state: { videoIndex: index } })
    }
    render () {
        return (
            <div className="video-list">
                <div className="video-list-item">
                    <Card
                        hoverable
                        cover={<img className="cover" alt="example" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3328067207,1224366276&fm=26&gp=0.jpg" />}
                        onClick={this.goVideo.bind(this, 0)}
                    >
                        <div>视频1</div>
                    </Card>
                </div>
                <div className="video-list-item">
                    <Card
                        hoverable
                        cover={<img className="cover" alt="example" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2180808491,2954741750&fm=26&gp=0.jpg" />}
                        onClick={this.goVideo.bind(this, 1)}
                    >
                        <div>视频2</div>
                    </Card>
                </div>
            </div>
        )
    }
}