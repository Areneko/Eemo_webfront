import React from 'react';
import { img } from '../utils/image'

const Top = () => {
    return (
        <React.Fragment>
            <div className="padding">
                <div className="post-content pattern01">
                    <img className="img" src={ img("emo.jpg") } alt="" />
                    <div className="img background"></div>
                    <p className="story">これはサンプルです。<br />こんな感じで画像とテキストが組み合わされます。<br />下のボタンを押して、画像をアップロードしてください。<br />その写真だけのエモい文章が創り出されます</p>
                    <div className="wrapper">
                        <p className="story">これはサンプルです。<br />こんな感じで画像とテキストが組み合わされます。<br />下のボタンを押して、画像をアップロードしてください。<br />その写真だけのエモい文章が創り出されます</p>
                    </div>
                </div>
            </div>
            <ul className="sns-share">
                <li></li>
            </ul>
        </React.Fragment>
    )
}

export default Top;