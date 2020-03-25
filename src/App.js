import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./hoc/Layout";




class App extends Component {

    render() {


        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route path={"/"} exact component={Home}/>
                        <Route path={"/about"} component={About}/>
                        <Redirect to={'/'}/>
                    </Switch>
                </Layout>
            </BrowserRouter>

        );
    }
}

export default App;


