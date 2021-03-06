import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import RouterMap from './router/routerMap';
//redux
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import {count,addGun,removeGun} from './redux/index'
import registerServiceWorker from './registerServiceWorker';
const store = createStore(count)

console.log(store.getState())
function render(){ReactDOM.render(
    //配置路由   
    <Provider store={store}>
           <RouterMap store={store} addGun={addGun} removeGun={removeGun}  />
    </Provider>
 
  , document.getElementById('root'));
}
render()
store.subscribe(function(){
  const state = store.getState();
  console.log("redux改变了")
})
registerServiceWorker();
