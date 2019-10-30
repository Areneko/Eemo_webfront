import React, { useState } from 'react';
import Axios from 'axios';

import { img } from '../utils/image';

const Footer = () => {

    const [file, setFile] = useState(null);

    const uploadImage = (e) => {
        setFile(e.target.files[0])
    }

    const postImage = async () => {
        if (file) {
            const params = new FormData();
            params.append('file', file);
            try {
                const result = await Axios.post(
                    '/api/generate',
                    params
                )
                console.log(result)
            } catch (e) {
                console.log(e);
            }
            // Reset DOM
            document.getElementById('post-btn').classList.remove('clicked');
            document.getElementById('header').classList.remove('upload');
            let img = document.getElementById('file-preview');
            img.src = "";
            let remove_btn = document.getElementById('remove-btn');
            remove_btn.click();
        }
    }

    return (
        <footer className="footer">
            <button id="post-btn" className="post-btn" onClick={ postImage }>
                <div className="cross"></div>
            </button>
            <div className="background"></div>

            <form id="form" action="" method="post" encType="multipart/form-data" onSubmit={ postImage }>
                <label id="drag-drop-area" className="upload-area" htmlFor="upload-area">
                    <img src={ img("upload.svg") } alt="" />
                    <p className="txt">Drag and Drop files here<br />
                        <span>or</span>
                    </p>
                    <div className="upload-btn">Upload</div>
                    <input id = "upload-area"
                        type = "file"
                        accept = "image/*"
                        onChange = {
                            (e) => uploadImage(e)
                        }
                    />
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