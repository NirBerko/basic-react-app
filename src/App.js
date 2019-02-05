import React, {Component} from 'react';
import {Switch, Route}    from 'react-router-dom';

import interceptor from './components/layout/interceptor';

import logo from "./logo.svg";

import './App.scss';

const HelloWorld = () => (
    <div className="App">
        <header className="App__header">
            <img src={logo} className="App__logo" alt="logo"/>
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App__link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    </div>
);

class App extends Component {
    constructor(props) {
        super(props);

        interceptor();
    }

    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path="/" component={HelloWorld}/>
                </Switch>
            </div>
        );
    }
}

export default App;