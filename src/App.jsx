import './App.sass';
import Header from './components/header/header';
import Footer from './components/footer/footer'
import Body from './components/body/body'
import { Route, Routes, } from 'react-router-dom';
import { Children } from 'react';


function Universal({ children }) {
    return (
        <div className="Universal">
            {children}
        </div>
    );
}
export default Universal;