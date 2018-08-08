import React, { Component } from 'react';
import {createStore} from 'redux';
import counter from './reducer';
import List from './components/list'
import './App.css';

let store = createStore(counter);
console.log(store)
class App extends Component {
	add(value){
		console.log(value)
		store.dispatch({type:'add',text:value})
	}
  render() {
    return (
      <div className="App">
        <List 
					value={store.getState()}
					add={this.add.bind(this)}
					onLeo={()=>store.dispatch({type:'leo'})}
				/>
      </div>
    );
  }
}

export {App,store};
