import React, { Component } from "react";
import classes from "./Ticker.module.css";
import { environment } from "../../environment/environment";

class Ticker extends Component {
  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.isActive && !this.props.isActive) {
      this.fetchCurrency();
      this.interval = setInterval(this.fetchCurrency, 10000);
    } else if (!nextProps.isActive && this.props.isActive) {
      clearInterval(this.interval);
    }
  }

  fetchCurrency = () => {
    return fetch(`${environment.baseURL}`)
      .then((r) => r.json())
      .then(({ data }) => {
        const coins = data.Data.map((coin) => {
          const obj = {
            name: coin.CoinInfo.Name,
            fullName: coin.CoinInfo.FullName,
            imageUrl: `https://cryptocompare.com/${coin.CoinInfo.imageUrl}`,
            price: coin.RAW.USD.PRICE.toFixed(3),
            volume24hour: coin.RAW.USD.VOLUME24HOUR.toFixed(2),
          };
          return obj;
        });
        this.props(coins);
      });
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { pair } = this.props;

    return (
      <div className={classes.ticker}>
        <p>{pair.toUpperCase().replace("_", " to ")}</p>
        <p>{`$ ${this.state.usd}`}</p>
        <p>{`€ ${this.state.eur}`}</p>
      </div>
    );
  }
}

export default Ticker;
