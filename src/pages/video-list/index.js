import React, { Component } from 'react';
import './index.css';

import { Card, Menu, Carousel } from 'antd';

export default class VideoList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            bannerList: [
                'https://image11.m1905.cn/uploadfile/2020/0508/thumb_1_1380_460_20200508105922980881.jpg',
                'https://image14.m1905.cn/uploadfile/2020/0506/thumb_1_1380_460_20200506043310491667.jpg',
                'https://image14.m1905.cn/uploadfile/2020/0506/thumb_1_1380_460_20200506043310491667.jpg',
                'https://image14.m1905.cn/uploadfile/2020/0429/thumb_1_1380_460_20200429043331988845.jpg',
                'https://image14.m1905.cn/uploadfile/2020/0502/thumb_1_1380_460_20200502074507152965.jpg'
            ],
            movieList: [
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
                },{
                    img: 'https://pic.dlili.tv/upload/poster/e4d59b3d15f290db.jpg',
                    title: '莫斯科大事件',
                    time: '1999-05-12'
                },{
                    img: 'https://pic.dlili.tv/upload/poster/c5298395d13a3313.jpg',
                    title: '紧急将破',
                    time: '2012-10-11'
                },{
                    img: 'https://pic.dlili.tv/upload/poster/480c193505c1c9bb.jpg',
                    title: '红色警戒999',
                    time: '2008-10-11'
                },{
                    img: 'https://pic.dlili.tv/upload/poster/e47cb456ba5385bf.jpg',
                    title: '罕井产出见',
                    time: '2001-01-11'
                },{
                    img: 'https://pic.dlili.tv/upload/poster/14177f22a0240075.jpg',
                    title: '海军商检',
                    time: '2012-10-08'
                },{
                    img: 'https://pic.dlili.tv/upload/poster/a406cf47fa305f36.jpg',
                    title: '怪客',
                    time: '2020-05-11'
                }
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
    goVideo(index) {
        this.props.history.push({ pathname:'/videoshow', state: { videoIndex: index } })
    }
    render () {
        const { bannerList, movieList, chinaMovie } = this.state;
        return (
            <div className="video-list">
                <div className='header'>
                    <div className='header-left'>
                        <img className='logo' src={require('./img/logo.jpeg')} />
                        <Menu mode="horizontal">
                            <Menu.Item>首页</Menu.Item>
                            <Menu.Item>最新</Menu.Item>
                            <Menu.Item>电影</Menu.Item>
                            <Menu.Item>聚集</Menu.Item>
                            <Menu.Item>首页</Menu.Item>
                        </Menu>
                    </div>
                    <div>
                        登录 | 注册 | 声明 | 投诉 | 求片
                    </div>
                </div>
                <Carousel autoplay>
                {
                    bannerList.map((item, index) => {
                        return <img src={item} key={index} />
                    })
                }
                </Carousel>
                <div className='content'>
                    <div className='content-left'>
                        <div className='zone-title'>院线热播</div>
                        <div className="recommand">
                            
                        {
                            movieList.map((item, index) => {
                                return (
                                    <div className="video-list-item" key={index}>
                                        <Card
                                            hoverable
                                            cover={<img className="cover" alt="example" src={item.img} />}
                                            onClick={this.goVideo.bind(this, 0)}
                                        >
                                            <div className='text'>{item.title}</div>
                                            <div className='text'>{item.time} 收录</div>
                                        </Card>
                                    </div>
                                )
                            })
                        }
                        </div>

                        <div className='zone-title'>欧美电影</div>
                        <div className="recommand">
                            
                        {
                            chinaMovie.map((item, index) => {
                                return (
                                    <div className="video-list-item" key={index}>
                                        <Card
                                            hoverable
                                            cover={<img className="cover" alt="example" src={item.img} />}
                                            onClick={this.goVideo.bind(this, 0)}
                                        >
                                            <div className='text'>{item.title}</div>
                                            <div className='text'>{item.time} 收录</div>
                                        </Card>
                                    </div>
                                )
                            })
                        }
                        </div>
                        <div className='zone-title'>华语电影</div>
                        <div className="recommand">
                            
                        {
                            chinaMovie.map((item, index) => {
                                return (
                                    <div className="video-list-item" key={index}>
                                        <Card
                                            hoverable
                                            cover={<img className="cover" alt="example" src={item.img} />}
                                            onClick={this.goVideo.bind(this, 0)}
                                        >
                                            <div className='text'>{item.title}</div>
                                            <div className='text'>{item.time} 收录</div>
                                        </Card>
                                    </div>
                                )
                            })
                        }
                        </div>
                    
                    </div>
                    <div className='content-right'>

                        <div className='zone-title'>热门视频</div>
                        <div className='hot-movie'>
                            {
                                movieList.map((item ,index) => {
                                    return <img className='hot-movie-item' src={item.img} key={index} />
                                })
                            }
                        </div>
                        <div className='zone-title'>最新评论</div>
                        <div className='common-list'>
                            <div>
                                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589203456920&di=418c24dc6399dbd3bbf5539c94ef29e8&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201812%2F7%2F2018127203650_KvXLM.thumb.700_0.jpeg" />
                                <div>非常高兴知道这个电影网站</div>
                            </div>
                            <div>
                                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589203456920&di=418c24dc6399dbd3bbf5539c94ef29e8&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201812%2F7%2F2018127203650_KvXLM.thumb.700_0.jpeg" />
                                <div>非常高兴知道这个电影网站</div>
                            </div>
                            <div>
                                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589203456920&di=418c24dc6399dbd3bbf5539c94ef29e8&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201812%2F7%2F2018127203650_KvXLM.thumb.700_0.jpeg" />
                                <div>非常高兴知道这个电影网站</div>
                            </div>
                            <div>
                                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589203456920&di=418c24dc6399dbd3bbf5539c94ef29e8&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201812%2F7%2F2018127203650_KvXLM.thumb.700_0.jpeg" />
                                <div>非常高兴知道这个电影网站</div>
                            </div>
                            <div>
                                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589203456920&di=418c24dc6399dbd3bbf5539c94ef29e8&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201812%2F7%2F2018127203650_KvXLM.thumb.700_0.jpeg" />
                                <div>非常高兴知道这个电影网站</div>
                            </div>
                            <div>
                                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589203456920&di=418c24dc6399dbd3bbf5539c94ef29e8&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201812%2F7%2F2018127203650_KvXLM.thumb.700_0.jpeg" />
                                <div>非常高兴知道这个电影网站</div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}