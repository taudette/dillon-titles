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
            <h2>Dillon Sample Project </h2>
            <h4>by Tyler Audette</h4>
          </div>
          <Titles />
        </div>
      </Provider>
    );
  }
}

export default App;
