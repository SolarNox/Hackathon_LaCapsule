import React, { Component } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import { Alert } from 'reactstrap';

import MainScreen from './Components/MainScreen';

// import {createStore, combineReducers}  from 'redux';
// import {Provider} from 'react-redux';
// import alerts from './Reducers/alerts.reducer';

// const store = createStore(combineReducers({alerts}));

export default class App extends Component {
  render() {
    return (
      // <Provider store={store}>
        <div className="App">
          <MainScreen />
        </div>
      // </Provider>
    );
  }
}
