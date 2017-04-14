import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';


// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';


const store = createStore(name);
function name(state = ['anything'], action) {
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


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);