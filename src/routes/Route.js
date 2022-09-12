import React, { createContext } from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import RouteSwitch from './RouteSwitch';
import Home from '../views/website/Home/index.js'
import NotFound from '../views/NotFound'
import Header from '../components/website/Header';

export const UserContext = createContext()

export default function AppRoute() {

    return (
        <div>
            <Router>
                <Header/>
                <RouteSwitch>
                    <Route exact path="/" element={<Home/>}></Route>
                    <Route exact path="*" element={<NotFound/>}></Route>
                </RouteSwitch>        
            </Router>
        </div>
    )
}