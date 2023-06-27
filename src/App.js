// src/main/frontend/src/App.js

import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Home from './page/Home';
import Join from './page/Join';


function App() {
   const [hello, setHello] = useState('')

    useEffect(() => {
        axios.get('/api/hello')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
        <div className='home-container'>
            <Header/>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/join' element={<Join/>}/>
                <Route path='/product/:id' element={<ProductDetail/>}/>
                
            </Routes>
        </div>
    );
}

export default App;