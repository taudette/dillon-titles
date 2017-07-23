import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Titles from './containers/Titles'
import configureStore from './store'
import { Provider } from 'react-redux';
import {fetchData} from './actions';

const store = configureStore();
const loadData = () => {
  store.dispatch(fetchData('https://hoopla-ws-dev.hoopladigital.com/kinds/7/titles/featured?offset=0&limit=51&kindId=7', {'ws-api': '2.1'}));
}

class App extends Component {
  render() {
    //would normaly load on enter using redux router
    loadData()
    return (
      <Provider store={store}>
        <div className="App">
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
