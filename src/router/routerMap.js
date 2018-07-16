
import React,{ Component } from 'react';
//引入路由
import {Route,HashRouter as Router } from 'react-router-dom';
import App from '../App';
//路由里面加载的组件通过这句话显示到这里 {this.props.children}  
// import { Link } from 'react-router';

class routerMap extends Component {
  render() {
    return (
        // <BrowserRouter>
        //     <Route path="/" component={App}/>
        // </BrowserRouter>
        <Router >
         <Route path="/" component={App}/>
        </Router>
    );
  }
}

export default routerMap;
