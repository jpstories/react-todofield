import React from 'react';
import './Nav.css';

//import { Router } from 'react-router';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Todo from '../../todo/Todo';


class Nav extends React.Component {
    render() {
        let navObject = this.props.menu;
        return (
            <Router>
                <nav className="header__menu">
                    <ul className="header__menu-list">
                        {Object.keys(navObject).map((elem) => {
                            return <li className="header__menu-elem"><a href={navObject[elem]}>{elem}</a></li>;
                        })}
                    </ul>
                    <Switch>
                        <Route exact path="/about" component={Todo}></Route>
                    </Switch>
                    {/* <div className="menu__indicator"></div> */}
                </nav>
            </Router>
        );
    };
};

export default Nav;
