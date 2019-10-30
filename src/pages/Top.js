import React from 'react';
import { img } from '../utils/image'

const Top = () => {
    return (
        <React.Fragment>
            <div class="padding">
                <div class="post-content pattern01">
                    <img class="img" src={ img("emo.jpg") } alt="" />
                    <div class="img background"></div>
                    <p class="story">これはサンプルです。<br />こんな感じで画像とテキストが組み合わされます。<br />下のボタンを押して、画像をアップロードしてください。<br />その写真だけのエモい文章が創り出されます</p>
                    <div class="wrapper">
                        <p class="story">これはサンプルです。<br />こんな感じで画像とテキストが組み合わされます。<br />下のボタンを押して、画像をアップロードしてください。<br />その写真だけのエモい文章が創り出されます</p>
                    </div>
                </div>
            </div>
            <ul class="sns-share">
                <li></li>
            </ul>
        </React.Fragment>
    )
}

export default Top;