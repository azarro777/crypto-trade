import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";



const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
                <Switch>
                    <Route path={"/"} exact component={Home}/>
                    <Route path={"/about"} component={About}/>
                </Switch>
        </BrowserRouter>
    );
};

export default App;


