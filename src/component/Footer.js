import React from 'react';

import { img } from '../utils/image';

const Footer = () => {
    return (
        <footer className="footer">
            <div id="post-btn" className="post-btn">
                <div className="cross"></div>
            </div>
            <div className="background"></div>

            <form id="form" action="" method="post" encType="multipart/form-data">
                <label id="drag-drop-area" className="upload-area" htmlFor="upload-area">
                    <img src={ img("upload.svg") } alt="" />
                    <p className="txt">Drag and Drop files here<br />
                        <span>or</span>
                    </p>
                    <div className="upload-btn">Upload</div>
                    <input id="upload-area" type="file" accept="image/*" />
                </label>
                <div className="preview-box">
                    <div id="remove-btn">×</div>
                    <img id="file-preview" />
                </div>
            </form>
        </footer>
    )
}

export default Footer;