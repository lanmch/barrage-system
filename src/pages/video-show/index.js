import React, { Component } from 'react';
import './index.css';
import { Button } from 'antd';
export default class VideoShow extends Component {
    constructor (props) {
        super(props);
        this.state = {

        }
    }

    render () {
        return (
            <div>video-show
                <Button type="danger">danger</Button>
            </div>
        )
    }
}