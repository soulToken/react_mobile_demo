import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import RouterMap from './router/routerMap'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    //配置路由
   <RouterMap/>
  , document.getElementById('root'));
registerServiceWorker();
