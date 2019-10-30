import React from 'react';
import { useSelector } from 'react-redux';

import { img } from '../utils/image'

const Top = () => {
    // Get text
    const text = useSelector((state) => {
        return state.text
    });
    return (
        <React.Fragment>
            <div className="padding">
                <div className="post-content pattern01">
                    <img id="display-img" className="img" src={ img("emo.jpg") } alt="" />
                    <div className="img background"></div>
                    <p className="story">{ text }</p>
                    <div className="wrapper">
                        <p className="story">{ text }</p>
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