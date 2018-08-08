import React, { Component } from 'react';
import {createStore} from 'redux';
import counter from './reducer';
import List from './components/list'
import './App.css';

let store = createStore(counter);
console.log(store)
class App extends Component {
  render() {
    return (
      <div className="App">
        <List 
					store={store}
				/>
      </div>
    );
  }
}

export {App,store};
