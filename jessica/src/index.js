import React from 'react';
import ReactDOM from 'react-dom';
import MvList from './MvList';
import  { Provider } from 'react-redux'
import store from './store';
import './style.css';

const App =(
    <Provider store = {store}>
       <MvList />
    </Provider>
);

ReactDOM.render(App, document.getElementById('root'));

