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
                {
                    [1,2,3,4,5,6,7,8,9].map((item, index) => {
                        return (
                            <div className="video-list-item" key={index}>
                                <Card
                                    hoverable
                                    cover={<img className="cover" alt="example" src={require(`./img/banner${index+1}.jpg`)} />}
                                    onClick={this.goVideo.bind(this, 0)}
                                >
                                    <div>视频{item}</div>
                                </Card>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}