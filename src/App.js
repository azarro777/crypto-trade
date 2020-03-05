import React, {Component} from 'react';
import './App.css';
import currencies from "./currencies";
import Ticker from "./Ticker/Ticker";

export  default class App extends Component {
    state = {
        activePairs: [],
    };

    /*
    handleCheckbox (currency){
        return function (event) {
            return
        }
    }
    */

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

  render() {
    return (
        <div className="App">
          <aside>
            <ul className="currList">
                {currencies.map(curr =>(
                    <li key={curr}
                    className="currItem">
                        <label htmlFor={curr}>{curr.toUpperCase()}</label>
                        <input type="checkbox" id={curr} onChange={this.handleCheckBox(curr)}/>
                    </li>
                ))}
            </ul>
          </aside>

            <main>
                {currencies.map(pair => <Ticker
                    key={pair}
                    pair={pair}
                    isActive={this.state.activePairs.includes(pair)}/>)}
            </main>
        </div>
    );
  }
}
