import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import typeOfMeasurementsList from './data/typeOfMeasurementsList.js';


let inititalState = ['anything', 'anything more'];
let name = (state = inititalState, action) => {
  if (action.type === '1') {
import App from './components/App';

const initialState = [
  'Smells like spirit',
  'Enter Sandman'
];

function playlist(state = initialState, action) {
  if (action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ];
  }
  return state;
}
const store = createStore(name);
store.subscribe(()=>{
  console.log(store.getState());
})

store.dispatch({type: '1', payload: 'targetInput.value'})


class App extends React.Component { 
  func(e){
    console.log(e.target.value)
  }
  render() {
    return (
        <div>
          
          <select onChange={this.func.bind(this)}>
            {typeOfMeasurementsList.map((item,index)=>{return (<option key={index} value={item}>{item}</option>)})}
          </select>
        </div>
      );
  }
}


const store = createStore(playlist);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);