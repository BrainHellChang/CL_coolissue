// src/main/frontend/src/App.js

import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';

import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';


function App() {
   const [hello, setHello] = useState('')

    useEffect(() => {
        axios.get('/api/hello')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
        <div>
            백엔드에서 가져온 데이터입니다 : {hello}
            <Header/>
            <Routes>
                <Route path='/' element={<ProductAll/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/product/:id' element={<ProductDetail/>}/>
            </Routes>
        </div>
    );
}

export default App;