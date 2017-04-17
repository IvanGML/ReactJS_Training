import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Select from './components/select.js';
import Test from './components/test.js';

// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';


const store = createStore(name);
let inititalState = ['anything', 'anything more'];
function name(state = inititalState, action) {
  if (action.type === '1') {
    return [
      ...state,
      action.payload
    ]
  }
  return state;
}
store.dispatch({type: '1', payload: 'targetInput.value'})
store.subscribe(()=>{
  console.log(store.getState())
})
class App extends React.Component { 
  render() {
    return (
        <div>
          <Select/>
          <Test/>
          
        </div>
      );
  }
}


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);