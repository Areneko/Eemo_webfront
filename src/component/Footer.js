import React, { useState } from 'react';
import Axios from 'axios';
import { useDispatch } from 'react-redux';

import UploadSVG from '../img/upload.svg';
import { setText } from '../modules/action';
import { API_ENDPOINT } from '../env';

const Footer = () => {

    const [file, setFile] = useState(null);
    const dispatch = useDispatch();

    const uploadImage = (e) => {
        setFile(e.target.files[0])
    }

    const postImage = async () => {
        if (file) {
            const params = new FormData();
            params.append('file', file);
            try {
                const result = await Axios.post(
                    API_ENDPOINT + '/api/generate',
                    params
                )
                // Dispatch text
                console.log(result.data)
                dispatch(setText({
                    text: result.data
                }));
            } catch (e) {
                console.log(e);
            }
            // Reset DOM
            document.getElementById('post-btn').classList.remove('clicked');
            document.getElementById('header').classList.remove('upload');
            let previewImg = document.getElementById('file-preview');
            previewImg.src = "";
            let remove_btn = document.getElementById('remove-btn');
            remove_btn.click();
            let displayImg = document.getElementById('display-img');
            const blobURL = window.URL.createObjectURL(file);
            displayImg.src = blobURL;
            setFile(null);
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
                    <img src={ UploadSVG } alt="" />
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