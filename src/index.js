import React from 'react';
import reactDom from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import { MyProvider } from './context/MyProvider';

reactDom.render(
    
     <MyProvider>  
    <App/>
    
    </MyProvider> 
    
    ,document.getElementById('root')
)