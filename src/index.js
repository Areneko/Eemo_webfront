import React from 'react';
import ReactDOM from 'react-dom';

import './css/style.scss'

import Header from './component/Header';
import Top from './pages/Top'
import Footer from './component/Footer';

ReactDOM.render(
    <React.Fragment>
        <Header />
        <Top />
        <Footer />
    </React.Fragment>
    , document.getElementById('root')
);