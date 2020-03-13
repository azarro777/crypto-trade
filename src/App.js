import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./hoc/Layout";
import Redirect from "react-router-dom/es/Redirect";



class App extends Component {

    render() {
        let routes = (
            <BrowserRouter>
                <Switch>
                    <Route path={"/"} exact component={Home}/>
                    <Route path={"/about"} component={About}/>
                    <Redirect to={'/'}/>
                </Switch>
            </BrowserRouter>
        );

        return (
            <Layout>
                { routes }
            </Layout>
        );
    }
}

export default App;


