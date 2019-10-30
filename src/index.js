import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './css/style.scss'

import { textReducer } from './modules/reducer';
const store = createStore(textReducer);

import Header from './component/Header';
import Top from './pages/Top'
import Footer from './component/Footer';

ReactDOM.render(
    <Provider store={ store }>
        <Header />
        <Top />
        <Footer />
    </Provider>
    , document.getElementById('root')
);