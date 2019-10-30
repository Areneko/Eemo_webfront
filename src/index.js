import React from 'react';
import ReactDOM from 'react-dom';

import './css/style.scss'

import Header from './component/Header';
import Top from './pages/Top'

ReactDOM.render(
    <React.Fragment>
        <Header />
        <Top />
    </React.Fragment>
    , document.getElementById('root')
);