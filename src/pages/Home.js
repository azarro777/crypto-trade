import React, { Component } from "react";
import currencies from "../currencies";
import Ticker from "../containers/Ticker/Ticker";
import "./Home.css";

class Home extends Component {

    state = {
        activePairs: [],
        ShowList: false
    };


    handleCheckBox = currency => event => {
        const {checked} = event.target;
        //const checked = event.target.checked;

        this.setState(({activePairs}) =>{
            let pairs = [...activePairs];

            if (checked){
                pairs.push(currency);
            } else {
                pairs = pairs.filter(pair => pair !== currency);
            }

            return {
                activePairs: pairs,
            }
        })
    };

    showListHandler = () => {
        this.setState({ShowList: !this.state.ShowList})
    };

    render() {
        return (
            <div className="Home">
                <aside>
                    <button type="button" className="btn btn-primary" onClick={this.showListHandler}>
                        Choose crypto
                    </button>
                    {this.state.ShowList ?
                        <ul className="currList">
                            {currencies.map(curr =>(
                                <li key={curr}
                                    className="currItem">
                                    <label htmlFor={curr}>{curr.toUpperCase()}</label>
                                    <input type="checkbox" id={curr} onChange={this.handleCheckBox(curr)}/>
                                </li>
                            ))}
                        </ul> : null
                    }

                </aside>

                <main>
                    {currencies.map(pair => <Ticker
                        key={pair}
                        pair={pair}
                        isActive={this.state.activePairs.includes(pair)}/>)}
                </main>
            </div>
        )
    }
}

export default Home;