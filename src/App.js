import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import interceptor from './components/layout/interceptor';

import './App.scss';

const HelloWorld = () => (<div>Hello World</div>);

class App extends Component {
    constructor(props) {
        super(props);

        interceptor();
    }

    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path="/" component={HelloWorld} />
                </Switch>
            </div>
        );
    }
}

export default App;