import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Todos from './Todos/Todos';
import { Provider } from 'react-redux';
import store from '../store';


export class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Todos />
                </div>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
