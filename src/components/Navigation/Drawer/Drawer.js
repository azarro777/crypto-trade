import React, {Component} from "react";
import classes from "./Drawer.module.css";
import Backdrop from "../../Backdrop/Backdrop";
import {NavLink } from "react-router-dom";


class Drawer extends Component {

    renderList = links => {
        return links.map((link, index)=>{
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        activeClassName={classes.active}
                        onClick={this.clickHandler}
                    >
                        {link.label}
                    </NavLink >
                </li>
            )
        })
    };

    clickHandler = () => {
        this.props.onClose()
    };

    render() {

        const cls = [
            classes.Drawer
        ];
        if (!this.props.isOpen){
            cls.push(classes.close)
        }

        const links = [
            {to: '/', label: 'Home', exact: true},
            {to: '/about', label: 'About', exact: false}
        ];
        return (
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderList(links)}
                    </ul>
                </nav>
                {this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null}
            </React.Fragment>
        )
    }

}

export default Drawer;