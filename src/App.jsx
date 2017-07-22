import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Titles from './containers/Titles'
import makeStore from './store'
import { Provider } from 'react-redux';
import {fetchData} from './actions';

const store = makeStore();
const loadData = () => {
  store.dispatch(fetchData('https://hoopla-ws-dev.hoopladigital.com/kinds/7/titles/featured?offset=0&limit=51&kindId=7'));
}

class App extends Component {
  render() {
    console.log(store)
    return (
      <Provider store={store}>
        <div className="App" onEnter={loadData}>
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
            <Titles />
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Provider>
    );
  }
}

export default App;
