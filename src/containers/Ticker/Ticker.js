import React, {Component} from "react";
import './Ticker.css';
import {environment} from "../../environment/environment";

class Ticker extends Component {

    state = {
        value1: 0,
        value2: 0
    };
    //isActive

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.isActive && !this.props.isActive){
            this.fetchCurrency();
            this.interval = setInterval(this.fetchCurrency, 10000);
        } else if (!nextProps.isActive && this.props.isActive){
            clearInterval(this.interval);
            this.setState({
                usd: 0,
                eur: 0
            })
        }


    }

    fetchCurrency = () =>{
        return fetch(`${environment.baseURL}price?api_key=${environment.apiKey}&fsym=${this.props.pair}&tsyms=USD,EUR`)
            .then(r => r.json())
            .then(res =>{this.setState({
                usd: res.USD,
                eur: res.EUR
            })});
    };

    /*componentDidMount() {
        this.fetchCurrency();
        this.interval = setInterval(this.fetchCurrency, 10000);
    }*/

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const {pair} = this.props;

        return (
            <div className="ticker">
                <p>{pair.toUpperCase().replace('_', ' to ')}</p>
                <p>{`$ ${this.state.usd}`}</p>
                <p>{`€ ${this.state.eur}`}</p>
            </div>
        )
    }
}

export default Ticker;